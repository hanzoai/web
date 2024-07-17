"use client"

import { DataTableDemo } from "@/components/data-table/data-table";
import { UserTableColumn, type UserTableDataType } from "@/components/data-table/user-table-column";
import { useRouter } from "next/navigation";

const data: UserTableDataType[] = [
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
  {
    email: "sharonwescorn@gmail.com",
    firstName: "Hope",
    lastName: "Broussard",
    city: "Paris",
    postalCode: "020304",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
]

const UniversalPage = () => {
  const router = useRouter();

  const onClickUser = (userId: string) => {
    router.push(`/users/details?id=${userId}`)
  }

  return (
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="overflow-hidden bg-background shadow">
        <div className="h-full flex-1 flex-col space-y-8 px-8 md:flex max-w-[calc(100vw-300px)]">
          <div className="space-y-4">
            <DataTableDemo data={data} columns={UserTableColumn} onClickHandler={onClickUser} filterKey="email" title='Users'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversalPage;