"use client"

import { DataTableDemo } from "@/components/data-table/data-table";
import { UserOrderTableColumn, type UserOrderTableDataType } from "@/components/data-table/user-order-table-column";
import { Button, Input } from "@hanzo/ui/primitives";
import { useState, useEffect } from "react";

type UserStatisticsType = {
  id: string
  createdAt: Date
  updatedAt: Date
}

type UserLocationType = {
  address: string,
  suite: string,
  city: string,
  postalcode: string,
  state: string,
  country: string
}

const statistics: UserStatisticsType = {
  id: 'K9idk9KII7',
  createdAt: new Date('10/11/2020'),
  updatedAt: new Date('10/11/2020')
}

const location: UserLocationType = {
  address: "address",
  suite: "suite",
  city: "Bloomington",
  postalcode: "1234",
  state: "Minnesota",
  country: "USA"
}

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
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');

  useEffect(() => {
    setAddress(location.address)
    setSuite(location.suite)
    setCity(location.city)
    setPostalCode(location.postalcode)
    setCountry(location.country)
    setState(location.state)
  }, [])

  return (
    <div className="flex flex-col space-y-4 p-4 overflow-y-auto">
      <div className="flex flex-row w-full items-center justify-center bg-background shadow gap-4">
        <div className="flex-1 flex flex-col border border-[#AAAAAA33] rounded-md p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Statistics ID</div>
          <span className="font-medium text-base text-muted-1">{statistics.id}</span>
        </div>
        <div className="flex-1 flex flex-col border border-[#AAAAAA33] rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Created At</div>
          <span className="font-medium text-base text-muted-1">{statistics.createdAt.toLocaleDateString()}</span>
        </div>
        <div className="flex-1 flex flex-col border border-[#AAAAAA33] rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Updated At</div>
          <span className="font-medium text-base text-muted-1">{statistics.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-md border border-[#AAAAAA33] bg-background shadow p-4 text-muted-1">
        <div>
          <h1 className="text-primary text-xl">Personal Information</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-primary">Email</div>
          <Input placeholder="Email" value={userEmail} onChange={() => setUserEmail} />
        </div>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-sm text-primary">First Name</div>
            <Input placeholder="First Name" value={firstName} onChange={() => setFirstName} />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-sm text-primary">Last Name</div>
            <Input placeholder="Last Name" value={lastName} onChange={() => setLastName} />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-md border border-[#AAAAAA33] bg-background shadow p-4 text-muted-1">
        <div>
          <h1 className="text-primary text-xl">Default Shipping Information</h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-sm text-primary">Address</div>
            <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-primary">Suite</div>
            <Input placeholder="Suite" value={suite} onChange={(e) => setSuite} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-primary">City</div>
            <Input placeholder="City" value={city} onChange={(e) => setCity} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-primary">ZIP/Postal Code</div>
            <Input placeholder="Zip Code" value={postalCode} onChange={(e) => setPostalCode} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-primary">Region/State</div>
            <Input placeholder="Select a State" value={state} onChange={(e) => setState} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-primary">Country</div>
            <Input placeholder="Select a Country" value={country} onChange={(e) => setCountry} />
          </div>
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </div>
      <DataTableDemo data={data} columns={UserOrderTableColumn} title='Order' />
    </div>
  )
}

export default Page;