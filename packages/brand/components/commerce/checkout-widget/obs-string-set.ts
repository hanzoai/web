import { 
  action, 
  computed, 
  makeObservable, 
  observable 
} from 'mobx'

class ObsStringSet {

  private _set = observable.set(new Set<string>())

  constructor(initial: string[] = []) {
    initial.forEach((el)  => {this._set.add(el)})
    makeObservable(this, {
      add: action,
      remove: action,   
      asArray: computed
    })
  }  

  add = (v: string | string[]): void => {
    if (Array.isArray(v)) {
      v.forEach((el)  => {this._set.add(el)})
    }
    else {
      this._set.add(v) 
    }
  }

  remove = (v: string | string[]): void => {
    if (Array.isArray(v)) {
      v.forEach((el)  => {this._set.delete(el)})
    }
    else {
      this._set.delete(v) 
    }
  }

  has = (v: string): boolean => (
    this._set.has(v)
  )

  get asArray() {
    return Array.from(this._set)
  }
}

export default ObsStringSet
