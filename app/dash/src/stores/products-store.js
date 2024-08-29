import {
    action,
    observable,
    runInAction,
  } from 'mobx'
  
  import capitalize from '@/utils/string/capitalize'
  
  export default class ProductsStore {
    @observable query = undefined
  
    @observable searchTokens = {}
  
    @observable page = 1
  
    @observable display = 10
  
    @observable total = 0
  
    @observable products = []
  
    @observable triggerNewSearch = false
  
    @observable sort = undefined
  
    @observable productId = undefined
  
    @observable product = {}
  
    @observable errors = {}
  
    @observable isLoading = false
  
    constructor(data, hanzoApi) {
      this.api = hanzoApi
    }
  
    @action async getProduct(id) {
      this.isLoading = true
  
      this.productId = id || this.productId
  
      try {
        const res = await this.api.client.product.get(this.productId)
  
        const ps = [this.api.client.counter.search({
          tag: `product.${this.productId}.sold`,
          period: 'total',
          geo: '',
        })]
  
        const [sold] = await Promise.all(ps)
  
        runInAction(() => {
          this.product = Object.assign(this.product, res, { sold: sold.count })
          this.isLoading = false
        })
  
        return this.product
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async updateProduct() {
      this.isLoading = true
  
      try {
        const res = await this.api.client.product.update(this.product)
  
        runInAction(() => {
          this.product = Object.assign(this.product, res)
          this.isLoading = false
        })
  
        return this.product
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async createProduct() {
      this.isLoading = true
  
      try {
        const res = await this.api.client.product.create(this.product)
  
        runInAction(() => {
          this.product = Object.assign(this.product, res)
          this.isLoading = false
        })
  
        return this.product
      } catch (e) {
        runInAction(() => {
          this.isLoading = false
        })
  
        throw e
      }
    }
  
    @action async listProducts(page, display) {
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
  
        const res = await this.api.client.product.list(opts)
  
        runInAction(() => {
          this.products = res.models
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
  
      const ps = []
      for (const product of this.products) {
        ps.push(this.api.client.counter.search({
          tag: `product.${product.id}.sold`,
          period: 'total',
          geo: '',
        }))
      }
  
      const ps2 = []
      for (const product of this.products) {
        ps2.push(this.api.client.counter.search({
          tag: `product.${product.id}.refunded.count`,
          period: 'total',
          geo: '',
        }))
      }
  
      try {
        const res = await Promise.all(ps)
        const res2 = await Promise.all(ps2)
  
        for (const k in this.products) {
          this.products[k].sold = res[k].count
          this.products[k].refundedAmount = res2[k].count
        }
      } catch (e) {
        console.log('counter error', e)
        throw e
      }
  
      return {
        models: this.products,
        page: this.page,
        display: this.display,
        count: this.count,
      }
    }
  }
  