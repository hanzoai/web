"use client"

import InputField from "@/components/DashInput/DashInput";
import { DataTableDemo } from "@/components/DataTable/DataTable";
import { UserOrderTableColumn, type UserOrderTableDataType } from "@/components/DataTable/UserOrderTableColumn";
import { Button } from "@hanzo/ui/primitives";
import { useState } from "react";

const data: UserOrderTableDataType[] = [
  {
    number: "233080001",
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
    total: "100",
    orderStatus: "cancelled",
    paymentStatus: "unpaid",
    state: "CS",
    country: "France",
    created: new Date().toLocaleDateString(),
    updated: "3 years ago"
  },
]

const Page = () => {
  const [userEmail, setUserEmail] = useState<string>('sharonwescorn@gmail.com');
  const [firstName, setFirstName] = useState<string>('Hope');
  const [lastName, setLastName] = useState<string>('Broussard');
  const [address, setAddress] = useState<string>('');
  const [suite, setSuite] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 overflow-y-auto">
      <div className="flex flex-col space-y-2 w-full rounded-[0.5rem] border bg-background shadow p-2">
        <div>
          <h1 className="text-primary text-2xl">Statistics</h1>
        </div>
        <div className="flex align-top justify-between">
          <div className="flex flex-col text-muted-1 space-y-1">
            <h5 className="font-bold">ID</h5>
            <span>K9idk9KII7</span>
          </div>
          <div className="flex flex-col text-muted-1 space-y-1">
            <h5 className="font-bold">Created At</h5>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex flex-col text-muted-1 space-y-1">
            <h5 className="font-bold">Updated At</h5>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-[0.5rem] border bg-background shadow p-2 text-muted-1">
        <div>
          <h1 className="text-primary text-2xl">Personal Information</h1>
        </div>
        <div className="flex">
          <InputField placeHolder="Email" value={userEmail} setValue={setUserEmail} />
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <InputField placeHolder="First Name" value={firstName} setValue={setFirstName} />
          <InputField placeHolder="Last Name" value={lastName} setValue={setLastName} />
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-[0.5rem] border bg-background shadow p-2 text-muted-1">
        <div>
          <h1 className="text-primary text-2xl">Default Shipping Information</h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[70%] md:pr-2 p-0">
            <InputField placeHolder="Address" value={address} setValue={setAddress} />
          </div>
          <div className="w-full md:w-[30%] md:pl-2 p-0">
            <InputField placeHolder="Suite" value={suite} setValue={setSuite} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] md:pr-2 p-0">
            <InputField placeHolder="City" value={city} setValue={setCity} />
          </div>
          <div className="w-full md:w-[40%] md:pl-2 p-0">
            <InputField placeHolder="ZIP/Postal Code" value={postalCode} setValue={setPostalCode} />
          </div>
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-[0.5rem] border bg-background shadow p-2 text-muted-1 max-w-[calc(100vw-366px)]">
        <div>
          <h1 className="text-primary text-2xl">Orders</h1>
        </div>
        <div className="space-y-4">
          <DataTableDemo data={data} columns={UserOrderTableColumn} filterKey="number" />
        </div>
      </div>
    </div>
  )
}

export default Page;