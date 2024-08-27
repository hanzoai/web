import { action, observable, runInAction } from "mobx"

import capitalize from '@/utils/string/capitalize'

export default class UsersStore {
  @observable query = undefined

  @observable searchTokens = {}

  @observable page = 1

  @observable display = 10

  @observable total = 0

  @observable users = []

  @observable triggerNewSearch = false

  @observable sort = undefined

  @observable userId = undefined

  @observable user = {}

  @observable errors = {}

  @observable isLoading = false

  constructor(data, hanzoApi) {
    this.api = hanzoApi
  }

  @action async getUser(id) {
    this.isLoading = true

    this.userId = id || this.userId

    try {
      const [res, ordersRes, referralsRes] = await Promise.all([
        this.api.client.user.get(this.userId),
        this.api.client.user.orders(this.userId),
        this.api.client.user.referrals(this.userId),
      ])

      console.log('refRes', referralsRes)

      runInAction(() => {
        this.user = Object.assign(this.user, res)
        // fix gender upper/lower case issues
        if (this.user.kyc && this.user.kyc.gender) {
          this.user.kyc.gender = this.user.kyc.gender.toLowerCase()
        }
        this.user.orders = ordersRes
        this.user.referrals = referralsRes

        console.log('user', this.user)

        this.isLoading = false
      })

      return this.user
    } catch (e) {
      runInAction(() => {
        this.isLoading = false
      })

      throw e
    }
  }

  @action async updateUser() {
    this.isLoading = true

    try {
      const res = await this.api.client.user.update(this.user)

      runInAction(() => {
        this.user = res
        this.isLoading = false
      })

      return this.user
    } catch (e) {
      runInAction(() => {
        this.isLoading = false
      })

      throw e
    }
  }

  @action async createUser() {
    this.isLoading = true

    try {
      const res = await this.api.client.user.create(this.user)

      runInAction(() => {
        this.user = res
        this.isLoading = false
      })

      return this.user
    } catch (e) {
      runInAction(() => {
        this.isLoading = false
      })

      throw e
    }
  }

  @action async listUsers(page, display) {
    this.isLoading = true

    this.page = page || this.page
    this.display = display || this.display

    if (!this.page || !this.display) {
      throw new Error('Some are parameters are missing')
    }

    try {
      const opts = {
        page: this.page,
        display: this.display,
      }

      const q = []

      for (const k in this.searchTokens) {
        const v = this.searchTokens[k]

        // special case query string
        if (k === 'q') {
          if (v !== undefined && v !== '') {
            console.log(k, v)
            q.push(v)
          }
          continue
        }

        if (v) {
          q.push(`${k}:${v}`)
        }
      }

      if (q.length > 0) {
        opts.q = q.join(' AND ')
      }

      console.log('opts', opts)

      const res = await this.api.client.user.list(opts)

      runInAction(() => {
        this.users = res.models
        this.count = parseInt(res.count, 10)
        this.isLoading = false
      })
    } catch (e) {
      runInAction(() => {
        this.isLoading = false
      })

      console.log('list error', e)
      throw e
    }

    console.log('display', this.display, this.isLoading)

    return {
      models: this.users,
      page: this.page,
      display: this.display,
      count: this.count,
    }
  }
}
