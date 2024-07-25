import { 
  action,
  autorun,
  computed, 
  makeObservable, 
  observable,
  reaction,
  type IReactionDisposer, 
} from 'mobx'

import type { CommerceService } from '@hanzo/commerce/types'

const LOG = false ////////////////////
const log = (s: string) => {
  if (LOG) {
    console.log('COMMERCE_UI ' + s)
  }
}

type SnapPoint = number | string

type SnapPoints = {
  full: SnapPoint
  micro: SnapPoint
}
  
type SnapPointsConfig = {
  mb: SnapPoints
  dt: SnapPoints
}

type DrawerState = 'closed' | 'micro' | 'full' 

interface SelectAndBuy {
  showVariants: (skuPath: string) => void
  showRecentVariants: () => void
  hideVariants: () => void
  get currentSkuPath(): string | undefined
  newRoute: () => void
}

interface CommerceDrawer {

  get open(): boolean
  get state(): DrawerState 
  get closedByUser(): boolean
  setClosedByUser(b: boolean): void
  get modal(): boolean
  get points(): SnapPoint[] 
  get activePoint(): SnapPoint | null
    // Called by UI Gesture
  onActivePointChanged: (p: SnapPoint | null) => void
  get showCheckout(): boolean
  get showRecent(): boolean
  get showBuy(): boolean

  get microHeight(): SnapPoint
  get isMobile(): boolean
  get snapPointPx(): number
}

class CommerceUIStore implements 
  SelectAndBuy,
  CommerceDrawer
{
  _vHeight: number = 0
  _routeChangedTime = 0

  _currentSkuPath: string | undefined = undefined
  _closedByUser: boolean = false
  _checkingOut: boolean | undefined = undefined
  _ignoreStateChange: boolean = false
  _activePoint: SnapPoint | null = null 
  
  _reactionDisposers: IReactionDisposer[] = []
  _service: CommerceService
  _pointsConfig: SnapPointsConfig 
  _points: SnapPoints  // points to either this._pointsConfig.md or this._pointsConfig.dt 

  constructor(s: CommerceService, conf: SnapPointsConfig) {
    this._service = s
    this._pointsConfig = conf
    this._points = this._pointsConfig.dt

    makeObservable(this, {
      _currentSkuPath: observable,
      _closedByUser: observable,
      _checkingOut: observable,
      _activePoint: observable,
      _points: observable.ref, 
      _vHeight: observable,
      _routeChangedTime: observable,

      showVariants: action,
      showRecentVariants: action,
      hideVariants: action,
      setClosedByUser: action,
      setCheckingOut: action,
      setActivePoint: action,
      setMobile: action,
      setViewportHeight: action,
      setRouteChangedTime: action,
      
      activePoint: computed,
      checkingOut: computed,
      closedByUser: computed,
      currentSkuPath: computed,
      microHeight: computed,
      modal: computed,
      points: computed,
      showRecent: computed,
      showBuy: computed,
      showCheckout: computed,
      snapPointPx: computed,
      state: computed,
      open: computed
    })
  }

  initialize = (): void => {

    this._reactionDisposers.push(reaction(
      () => ( this.state ),
      (s) => {
        if (this.ignoreStateChange) {
          log(`STATE CHANGE to "${s}" (IGNORED)`) // ===========
          this.setIgnoreStateChange(false)
          return
        }
        else {
          log(`STATE CHANGE to "${s}" (UI REACTED)`) // ===========
          this._syncUIToState(s)
        }
      }
    ))
    /*
    this._reactionDisposers.push(autorun(() => {
      log('AUTORUN: OPEN: ' + this.open)
      log('AUTORUN:' + // ===============
        '[showCheckout: '  + this.showCheckout + 
        '], [showRecent: ' + this.showRecent + 
        '], [showBuy: ' + this.showBuy + 
        '], [closedByUser: ' + this._closedByUser + 
        '], [checkingOut: ' + this._checkingOut + ']'
      ) // ===========
    }))
    */
  }

  newRoute = () => {
    this.setRouteChangedTime(new Date().getTime())
    this.hideVariants()
    this.setClosedByUser(false)
    // DO NOT reset _checkingOut!
  }

  onActivePointChanged = (newPoint: SnapPoint | null): void => { 
    log("ON onActivePointChanged: " +  newPoint) // ===========
    if (newPoint === this._points.micro && this.activePoint === this._points.full) {
      this.setIgnoreStateChange(true)
      this.hideVariants()  
    }
    else if (newPoint === this._points.full && this.activePoint === this._points.micro) {
      this.setIgnoreStateChange(true)
      this.showRecentVariants()
    }
    this.setActivePoint(newPoint)  
  }

  showVariants = (skuPath: string): void => {
    this._service.setCurrentItem(undefined)
    this._currentSkuPath = skuPath
    this._closedByUser = false
  } 

  showRecentVariants = (): void => {
    const recentItemInfo = this._service.recentItem
    if (recentItemInfo) {
      this._service.setCurrentItem(undefined)
      this._currentSkuPath = recentItemInfo.item.sku
      this._closedByUser = false
    }
  } 

  hideVariants = (): void => { this._currentSkuPath = undefined }
  get currentSkuPath(): string | undefined { return this._currentSkuPath } 

  get closedByUser(): boolean { return this._closedByUser }
  setClosedByUser = (b: boolean): void => { this._closedByUser = b}

  get ignoreStateChange(): boolean { return this._ignoreStateChange }
  setIgnoreStateChange = (b: boolean): void => { this._ignoreStateChange = b}

  get checkingOut(): boolean | undefined { return this._checkingOut }
  setCheckingOut = (b: boolean): void => { this._checkingOut = b }

  get activePoint(): SnapPoint | null { return this._activePoint }
  setActivePoint = (pt: SnapPoint | null): void => { this._activePoint = pt}
   
  setRouteChangedTime = (t: number): void => {this._routeChangedTime = t}

  get points(): SnapPoint[] { 
    return [this._points.micro, this._points.full]
  }

  _syncUIToState = (s: DrawerState) => {
    log("_syncUIToState: " +  s) // ===========
    if (s === 'micro') {
      this.setActivePoint(this.points[0])
    }
    else if (s === 'full') {
      this.setActivePoint(this.points[this.points.length - 1])
    } 
  }

  get open(): boolean {

    log('open():' + // ===============
      ' showCheckout: '  + this.showCheckout + 
      ' showRecent: ' + this.showRecent + 
      ' showBuy: ' + this.showBuy
    ) // ===========

    return ( 
      this._checkingOut !== undefined
      &&
      !this._checkingOut 
      &&
      !this.closedByUser
      && 
      (this.showCheckout || this.showRecent || this.showBuy)
    )
  }

  get state(): DrawerState {
    if (!this.closedByUser && !this._checkingOut) {
      if (this.showBuy) {
        return 'full'
      }
      else if (this.showRecent || this.showCheckout) {
        return 'micro'
      }
    }
    return 'closed'
  }

  get showRecent(): boolean {

    const recentInfo = this._service.recentItem
    return !!recentInfo && recentInfo.modified > this._routeChangedTime
  }

  get showBuy(): boolean {return !!this.currentSkuPath}
  get showCheckout(): boolean { return !this._service.cartEmpty}
  get modal(): boolean { return this.state !== 'micro'}

  get microHeight(): SnapPoint {
    return this._points.micro
  }

  get isMobile(): boolean { return this._pointsConfig.mb === this._points }
  setMobile = (b: boolean): void => { 
    log("setMobile: " +  b) // ===========
    this._points = b ? this._pointsConfig.mb : this._pointsConfig.dt
  }

  setViewportHeight = (v: number) => {this._vHeight = v}
  get snapPointPx(): number {
    if (!this._activePoint || this._vHeight === 0) return 0

    if (typeof this._activePoint === 'string') {
      return parseInt(this._activePoint)
    }

    return this._vHeight * this._activePoint as number
  }

  dispose = () => {
    this._reactionDisposers.forEach((d) => {d()})
  }
}

export {
  CommerceUIStore,
  type CommerceDrawer,
  type SelectAndBuy,
  type SnapPointsConfig,
  type SnapPoints,
  type SnapPoint
}