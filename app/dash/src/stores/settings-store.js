import { action, observable, computed, autorun, runInAction } from "mobx"

import akasha from 'akasha'
import { renderDate, rfc3339 } from '@hanzo/utils'

export default class SettingsStore {
  @observable lastChecked = undefined
  @observable countries = []

  @observable isLoading = false

  constructor(data, hanzoApi) {
    this.api = hanzoApi

    this.load()

    autorun(() => this.save())
  }

  save() {
    akasha.set('library.lastChecked', this.lastChecked)
    akasha.set('library.countries',   this.countries)
  }

  @action async load() {
    this.isLoading = true
    this.countries   = akasha.get('library.countries') || []
    this.lastChecked = renderDate(new Date(), rfc3339)

    try {
      let res = await this.api.client.library.daisho({
        hasCountries:       !!this.countries && this.countries.length != 0,
        lastChecked:        renderDate(this.lastChecked || '2000-01-01', rfc3339),
      })

      runInAction(() => {
        this.countries = res.countries || this.countries

        this.save()
        this.isLoading = false
      })
    } catch(e) {
      runInAction(() => {
        this.isLoading = false
      })

      throw e
    }
  }

  get genderOptions() {
    return {
      male: 'Male',
      female: 'Female',
      unspecified: 'Unspecified',
      other: 'Other',
    }
  }

  @computed get countryOptions() {
    let countries = this.countries.slice().sort((a, b) => {
      if (a.name < b.name) { return -1 }
      if (a.name > b.name) { return 1 }
      return 0
    })

    let options = {}

    for (let k in countries) {
      let country = countries[k]
      options[country.code.toUpperCase()] = country.name
    }

    return options
  }

  @computed get stateOptions() {
    let options = {}
    let countries = this.countries

    for (let k in countries) {
      let country = countries[k]
      let cCode = country.code.toUpperCase()

      let c = options[cCode]
      if (!c) {
        c = options[cCode] = {}
      }

      let subdivisions = country.subdivisions.slice().sort((a, b) => {
        if (a.name < b.name) { return -1 }
        if (a.name > b.name) { return 1 }
        return 0
      })

      for (let k2 in subdivisions) {
        let subdivision = subdivisions[k2]

        c[subdivision.code.toUpperCase()] = subdivision.name
      }
    }

    return options
  }
}
