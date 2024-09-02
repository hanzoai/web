import {
    action,
    observable,
    runInAction,
  } from 'mobx'
  
  import capitalize from '@/utils/string/capitalize'
  
  export default class OrdersStore {
    @observable query = undefined
  
    @observable searchTokens = {}
  
    @observable page = 1
  
    @observable display = 10
  
    @observable total = 0
  
    @observable orders = []
  
    @observable triggerNewSearch = false
  
    @observable sort = undefined
  
    @observable orderId = undefined
  
    @observable order = {}
  
    @observable errors = {}
  
    @observable isLoading = false
  
    constructor(data, hanzoApi) {
      this.api = hanzoApi
    }
  
    @action async refundOrder(id, amount) {
      this.isLoading = true
  
      this.orderId = id || this.orderId
  
      try {
        const res = await this.api.client.order.refund({
          id: this.orderId,
          amount,
        })
  
        runInAction(() => {
          this.order = Object.assign(this.order, res)
          this.isLoading = false
        })
  
        return this.order
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async getOrder(id) {
      this.isLoading = true
  
      this.orderId = id || this.orderId
  
      try {
        const ps = [this.api.client.order.get(this.orderId), this.api.client.order.payments(this.orderId)]
  
        const [res, payments] = await Promise.all(ps)
  
        runInAction(() => {
          this.order = Object.assign(this.order, res, { paymentObjects: payments })
          this.isLoading = false
        })
  
        return this.order
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async updateOrder() {
      this.isLoading = true
  
      try {
        console.log('updateOrder: ', this.order)
        const res = await this.api.client.order.update(this.order)
  
        runInAction(() => {
          this.order = Object.assign(this.order, res)
          this.isLoading = false
        })
  
        return this.order
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async createOrder() {
      this.isLoading = true
  
      try {
        const res = await this.api.client.order.create(this.order)
  
        runInAction(() => {
          this.order = res
          this.isLoading = false
        })
  
        return this.order
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async listOrders(page, display) {
      this.isLoading = true
  
      this.page = page || this.page
      this.display = display || this.display
  
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
  
        const res = await this.api.client.order.list(opts)
  
        runInAction(() => {
          this.orders = res.models
          this.count = parseInt(res.count, 10)
          this.isLoading = false
        })
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
  
      return {
        models: this.orders,
        page: this.page,
        display: this.display,
        count: this.count,
      }
    }
  }
  