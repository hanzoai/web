"use client"

import { useState, useEffect } from "react";
import moment from 'moment-timezone'
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";

import { useStore } from "@/stores";
import { DataTableDemo } from "@/components/data-table/data-table";
import { UserTableColumn } from "@/components/data-table/user-table-column";

const UsersPage = observer(() => {
  const router = useRouter();
  const { usersStore, credentialStore } = useStore()

  const [data, setData] = useState()
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchToken, setSearchToken] = useState('')

  const getData = async (page: number, pageSize: number) => {
    const response = await usersStore.listUsers(page + 1, pageSize)
    console.log("data: ", response.models)
    const tableData = response.models.map((user: any) => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      city: user.shippingAddress.city,
      postalCode: user.shippingAddress.postal,
      state: user.shippingAddress.state,
      country: user.shippingAddress.country,
      created: moment(user.createdAt).format('MM/DD/YYYY'),
      updated: moment(user.updatedAt).fromNow(),
    }))
    setData(tableData)
  }
  
  const onClickUser = (userId: string) => {
    router.push(`/users/details?id=${userId}`)
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
    usersStore.searchTokens = {q: searchToken}
    getData(page, pageSize)
  }, [searchToken, page])

  return (
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="overflow-hidden bg-background shadow">
        <div className="h-full flex-1 flex-col md:flex">
          <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
          {data && <DataTableDemo
            data={data}
            columns={UserTableColumn}
            onClickHandler={onClickUser}
            title='Users'
            filterKey='user'
            searchKey={searchToken}
            setSearchKey={setSearchToken}
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
          }
        </div>
      </div>
    </div>
  )
})

export default UsersPage;