import { 
  action,
  computed, 
  makeObservable, 
  observable,
  reaction,
  type IReactionDisposer, 
} from 'mobx'

import type { CommerceService, LineItem, ObsLineItemRef } from '@hanzo/commerce/types'

const logOn = false


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

interface RecentActivity extends ObsLineItemRef {
  quantityChanged(sku: string, val: number, prevVal: number): void
}

interface SelectAndBuy {
  showVariants: (skuPath: string) => void
  hideVariants: () => void
  get currentSkuPath(): string | undefined
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
  get showAdded(): boolean
  get showBuy(): boolean

  get microHeight(): SnapPoint
  get isMobile(): boolean
  get snapPointPx(): number
}

class CommerceUIStore implements 
  RecentActivity,
  SelectAndBuy,
  CommerceDrawer
{
  _vHeight: number = 0

  _currentSkuPath: string | undefined = undefined
  _closedByUser: boolean = false
  _checkingOut: boolean = false
  _ignoreStateChange: boolean = false
  _activePoint: SnapPoint | null = null 
  
  _activeItem: LineItem | undefined = undefined
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
      _activeItem: observable.ref, 
      _closedByUser: observable,
      _checkingOut: observable,
      _activePoint: observable,
      _points: observable.ref, 
      _vHeight: observable,

      showVariants: action,
      hideVariants: action,
      quantityChanged: action,
      setClosedByUser: action,
      setCheckingOut: action,
      setActivePoint: action,
      setMobile: action,
      setViewportHeight: action,
      clearActiveItem: action,
      
      activePoint: computed,
      checkingOut: computed,
      closedByUser: computed,
      currentSkuPath: computed,
      item: computed,
      microHeight: computed,
      modal: computed,
      points: computed,
      showAdded: computed,
      showBuy: computed,
      showCheckout: computed,
      snapPointPx: computed,
      state: computed,
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
  }

  reset = () => {
    this.hideVariants()
    this.setClosedByUser(false)
    this.clearActiveItem()
    // DO NOT reset _checkingOut!
  }

  onActivePointChanged = (pt: SnapPoint | null): void => { 
    log("ON onActivePointChanged: " +  pt) // ===========
    if (pt === this._points.micro && this.activePoint === this._points.full) {
      this.setIgnoreStateChange(true)
      this.hideVariants()  
    }
    else if (pt === this._points.full && this.activePoint === this._points.micro) {
      this.setIgnoreStateChange(true)
      this.showVariants(this.item?.sku ?? '')  
    }
    this.setActivePoint(pt)  
  }

  showVariants = (skuPath: string): void => {
    this._service.setCurrentItem(undefined)
    this._currentSkuPath = skuPath
    this._closedByUser = false
  } 

  hideVariants = (): void => { this._currentSkuPath = undefined }

  get currentSkuPath(): string | undefined { return this._currentSkuPath } 

  quantityChanged = (sku: string, val: number, oldVal: number): void  => {

    if (val === 0) {
      if (this._activeItem?.sku === sku) {
        this._activeItem = undefined
      }
      // otherwise ignore
    }
    else {
      if (!this._activeItem || this._activeItem.sku !== sku) {
        this._activeItem = this._service.getItemBySku(sku)
      }
    }
  } 

  get item(): LineItem | undefined { return this._activeItem }
  clearActiveItem = (): void => { this._activeItem = undefined }

  get closedByUser(): boolean { return this._closedByUser }
  setClosedByUser = (b: boolean): void => { this._closedByUser = b}

  get ignoreStateChange(): boolean { return this._ignoreStateChange }
  setIgnoreStateChange = (b: boolean): void => { this._ignoreStateChange = b}

  get checkingOut(): boolean { return this._checkingOut }
  setCheckingOut = (b: boolean): void => { this._checkingOut = b }

  get activePoint(): SnapPoint | null { return this._activePoint }
  setActivePoint = (pt: SnapPoint | null): void => { this._activePoint = pt}
   
  get points(): SnapPoint[] { 
    if (this.showBuy && !(this.showAdded || this.showCheckout)) {
      return [this._points.full]
    }
    else if (!this.showBuy && !this.showAdded && this.showCheckout) {
      return [this._points.micro]
    }
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
    return ( 
      !this.closedByUser 
      && 
      (this.showCheckout || this.showAdded || this.showBuy)
    )
  }

  get state(): DrawerState {
    if (this.showBuy) {
      return 'full'
    }
    else if (!this.closedByUser && (this.showAdded || this.showCheckout)) {
      return 'micro'
    }
    return 'closed'
  }

  get showBuy(): boolean {return !!this.currentSkuPath}
  get showAdded(): boolean { return !this._checkingOut && !!this.item}
  get showCheckout(): boolean { return !this._checkingOut }
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
  type RecentActivity,
  type SelectAndBuy,
  type SnapPointsConfig,
  type SnapPoints,
  type SnapPoint
}