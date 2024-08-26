import akasha from 'akasha'

import {
  action,
  autorun,
  computed,
  observable,
  runInAction,
} from 'mobx'

export default class CredentialStore {
  @observable user = undefined

  @observable orgs = undefined

  @observable org = undefined

  @observable integrations = []

  @observable activeOrg = -1

  @observable isLoading = false

  @observable email = ''

  @observable password = ''

  @observable remember = true

  @observable errors = {
    email: '',
    password: '',
  }

  constructor(data, hanzoApi) {
    this.api = hanzoApi

    this.load()

    if (this.orgs) {
      this.api.key = this.orgs[0]['live-secret-key']
    }

    autorun(() => this.save())
  }

  save() {
    akasha.set('credentials.user', this.user)
    akasha.set('credentials.orgs', this.orgs)
    akasha.set('credentials.activeOrg', this.activeOrg)
  }

  hasIntegration(type) {
    for (const integration of this.integrations) {
      console.log('inte', integration)
      if (integration.type === type) {
        return true
      }
    }

    return false
  }

  @action setProperty(k, v) {
    this[k] = v
  }

  @action setError(k, v) {
    this.errors[k] = v
  }

  @action load() {
    this.user = akasha.get('credentials.user')
    this.orgs = akasha.get('credentials.orgs')
    this.activeOrg = akasha.get('credentials.activeOrg')
  }

  @action async getOrg() {
    this.isLoading = true

    try {
      const ps = [
        this.api.client.organization.get(this.orgStub.id),
        this.api.client.organization.getIntegrations(this.orgStub.id),
      ]

      const [org, integrations] = await Promise.all(ps)

      runInAction(() => {
        this.org = org
        this.integrations = integrations || []
        this.isLoading = false
      })
    } catch (e) {
      runInAction(() => {
        this.isLoading = false
      })

      throw e
    }
  }

  @action async login(username, password) {
    this.isLoading = true

    try {
      const user = username || this.email
      const pass = password || this.password
      const res = await this.api.client.dashv2.login({
        email: user,
        password: pass,
        // client_id: this.inputs.organization.val(),
        // grant_type: 'password',
      })

      runInAction(() => {
        this.username = ''
        this.password = ''

        this.user = res.user
        this.orgs = res.organizations
        this.activeOrg = 0
        this.isLoading = false

        this.api.key = this.orgs[0]['live-secret-key']
      })
    } catch (e) {
      runInAction(() => {
        this.isLoading = false
      })

      throw e
    }
  }

  @action logout() {
    this.user = undefined
    this.orgs = undefined
    this.activeOrg = -1
  }

  @computed get orgStub() {
    return this.orgs[this.activeOrg]
  }

  @computed get isLoggedIn() {
    return this.user != null
  }
}