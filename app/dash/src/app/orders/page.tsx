"use client"

import { DataTableDemo } from "@/components/data-table/data-table";
import { OrderTableColumn, type OrderTableDataType } from "@/components/data-table/order-table-column";
import { useRouter } from "next/navigation";

const data: OrderTableDataType[] = [
  {
    number: "233080001",
    userEmail: "sharonwescorn@gmail.com",
    total: "100",
    orderStatus: "cancelled",
    paymentStatus: "unpaid",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    number: "233080002",
    userEmail: "sharonwescorn@gmail.com",
    total: "100",
    orderStatus: "cancelled",
    paymentStatus: "unpaid",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    number: "233080003",
    userEmail: "sharonwescorn@gmail.com",
    total: "100",
    orderStatus: "cancelled",
    paymentStatus: "unpaid",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    number: "233080004",
    userEmail: "sharonwescorn@gmail.com",
    total: "100",
    orderStatus: "cancelled",
    paymentStatus: "unpaid",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
]

const UniversalPage = () => {
  const router = useRouter();

  const onClickUser = (orderId: string) => {
    router.push(`/orders/details?id=${orderId}`)
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="overflow-hidden bg-background shadow">
        <div className="h-full flex-1 flex-col md:flex">
          <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
          <DataTableDemo data={data} columns={OrderTableColumn} onClickHandler={onClickUser} filterKey="number" title='Orders' />
        </div>
      </div>
    </div>
  )
}

export default UniversalPage;