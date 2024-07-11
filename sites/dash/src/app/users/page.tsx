"use client"

import { DataTableDemo } from "@/components/DataTable/DataTable";
import { UserTableColumn, type UserTableDataType } from "@/components/DataTable/UserTableColumn";
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
    <div className="flex-1 space-y-4 p-8 pt-6 overflow-y-auto">
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex max-w-[calc(100vw-366px)]">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Users
              </h2>
              <p className="text-muted-1">Here's a list of users</p>
            </div>
          </div>
          <div className="space-y-4">
            <DataTableDemo data={data} columns={UserTableColumn} onClickHandler={onClickUser} filterKey="email" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversalPage;