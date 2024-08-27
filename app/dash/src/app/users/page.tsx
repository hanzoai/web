"use client"

import { useState, useRef, useEffect } from "react";
import moment from 'moment-timezone'
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";

import { useStore } from "@/stores";
import { MUITable } from "@/components/tables";
import { DataTableDemo } from "@/components/data-table/data-table";
import { UserTableColumn, type UserTableDataType } from "@/components/data-table/user-table-column";
// import { useMidstream } from "@/hooks";

// const data: UserTableDataType[] = [
//   {
//     email: "sharonwescorn@gmail.com",
//     firstName: "Hope",
//     lastName: "Broussard",
//     city: "Paris",
//     postalCode: "020304",
//     state: "CS",
//     country: "France",
//     created: new Date().toLocaleDateString(),
//     updated: "3 years ago"
//   },
//   {
//     email: "sharonwescorn@gmail.com",
//     firstName: "Hope",
//     lastName: "Broussard",
//     city: "Paris",
//     postalCode: "020304",
//     state: "CS",
//     country: "France",
//     created: new Date().toLocaleDateString(),
//     updated: "3 years ago"
//   },
//   {
//     email: "sharonwescorn@gmail.com",
//     firstName: "Hope",
//     lastName: "Broussard",
//     city: "Paris",
//     postalCode: "020304",
//     state: "CS",
//     country: "France",
//     created: new Date().toLocaleDateString(),
//     updated: "3 years ago"
//   },
//   {
//     email: "sharonwescorn@gmail.com",
//     firstName: "Hope",
//     lastName: "Broussard",
//     city: "Paris",
//     postalCode: "020304",
//     state: "CS",
//     country: "France",
//     created: new Date().toLocaleDateString(),
//     updated: "3 years ago"
//   },
//   {
//     email: "sharonwescorn@gmail.com",
//     firstName: "Hope",
//     lastName: "Broussard",
//     city: "Paris",
//     postalCode: "020304",
//     state: "CS",
//     country: "France",
//     created: new Date().toLocaleDateString(),
//     updated: "3 years ago"
//   },
//   {
//     email: "sharonwescorn@gmail.com",
//     firstName: "Hope",
//     lastName: "Broussard",
//     city: "Paris",
//     postalCode: "020304",
//     state: "CS",
//     country: "France",
//     created: new Date().toLocaleDateString(),
//     updated: "3 years ago"
//   },
// ]

const columns = [
  {
    title: 'Email',
    field: 'email',
  },
  {
    title: 'First Name',
    field: 'firstName',
  },
  {
    title: 'Last Name',
    field: 'lastName',
  },
  {
    title: 'City',
    field: 'shippingAddressCity',
    render: (row: any) => row.shippingAddress.city,
  },
  {
    title: 'Postal Code',
    field: 'shippingAddressPostalCode',
    render: (row: any) => row.shippingAddress.postalCode,
  },
  {
    title: 'State',
    field: 'shippingAddressState',
    render: (row: any) => row.shippingAddress.state,
  },
  {
    title: 'Country',
    field: 'shippingAddressCountry',
    render: (row: any) => row.shippingAddress.country,
  },
  {
    title: 'Created',
    field: 'createdAt',
    render: (row: any) => moment(row.createdAt).format('MM/DD/YYYY'),
  },
  {
    title: 'Updated',
    field: 'updatedAt',
    render: (row: any) => moment(row.updatedAt).fromNow(),
  },
]

const UsersPage = observer(() => {
  const router = useRouter();
  const { usersStore, credentialStore } = useStore()

  const [data, setData] = useState()
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchToken, setSearchToken] = useState('')

  const getData = async (page: number, pageSize: number) => {
    const response = await usersStore.listUsers(page + 1, pageSize)
    const tableData = response.models.map((user: any) => ({
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (credentialStore.isLoggedIn) {
        clearInterval(interval)
        getData(page, pageSize)
        console.log("count: ", usersStore.total)
      }
    }, 500)
  }, [])
  
  useEffect(() => {
    usersStore.searchTokens = {q: searchToken}
    getData(page, pageSize)
    console.log("count: ", usersStore.total)
  }, [searchToken, page])

  const onClickUser = (userId: string) => {
    router.push(`/users/details?id=${userId}`)
  }

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