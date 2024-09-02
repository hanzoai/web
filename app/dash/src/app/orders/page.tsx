"use client"

import { DataTableDemo } from "@/components/data-table/data-table";
import { OrderTableColumn } from "@/components/data-table/order-table-column";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";
import { useStore } from "@/stores";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const OrdersPage = observer(() => {
  const router = useRouter();
  const { ordersStore, credentialStore } = useStore()

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState()
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchToken, setSearchToken] = useState('')

  const getData = async (page: number, pageSize: number) => {
    const response = await ordersStore.listOrders(page + 1, pageSize)
    console.log(response.models)
    const tableData = response.models.map((order: any) => ({
      id: order.id,
      number: order.number,
      userEmail: order.email,
      total: order.total,
      orderStatus: order.status,
      paymentStatus: order.paymentStatus,
      state: order.billingAddress.state,
      country: order.billingAddress.country,
      created: moment(order.createdAt).format("MM/DD/YYYY"),
      updated: moment(order.updatedAt).fromNow()
    }))
    setData(tableData)
    setIsLoading(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (credentialStore.isLoggedIn) {
        clearInterval(interval)
        getData(page, pageSize)
      }
    }, 500)
  }, [])

  useEffect(() => {
    ordersStore.searchTokens = { q: searchToken }
    getData(page, pageSize)
  }, [searchToken, page])

  const onClickUser = (order: any) => {
    router.push(`/orders/details?id=${order.id}`)
  }

  return (
    isLoading ? <div className="w-full flex justify-center p-4">Loading...</div> :
      <div className="flex-1 space-y-4 overflow-y-auto">
        <div className="overflow-hidden bg-background shadow">
          <div className="h-full flex-1 flex-col md:flex">
            <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
            {data && <DataTableDemo
              data={data}
              columns={OrderTableColumn}
              onClickHandler={onClickUser}
              title='Orders'
              filterKey='order'
              searchKey={searchToken}
              setSearchKey={setSearchToken}
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />}
          </div>
        </div>
      </div>
  )
})

export default OrdersPage;