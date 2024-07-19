"use client";

import DashSelect from "@/components/dash-select/dash-select";
import { DataTableDemo } from "@/components/data-table/data-table";
import { OrderDetailTableColumn, type OrderDetailTableDataType } from "@/components/data-table/order-detail-table-column";
import { Button, Input } from "@hanzo/ui/primitives";
import { useState } from "react";

const data: OrderDetailTableDataType[] = [
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  },
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  },
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  },
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  },
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  },
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  },
  {
    externalId: '#98457',
    type: 'Online',
    last: 'Last 4',
    ip: '121.234.64.12',
    country: 'USA',
    status: 'completed',
    fee: 600,
    amount: 500,
    refunded: 'NO',
  }
];

type OrderStatisticsType = {
  id: string
  createdAt: Date
  updatedAt: Date
}

const statistics: OrderStatisticsType = {
  id: 'K9idk9KII7',
  createdAt: new Date('10/11/2020'),
  updatedAt: new Date('10/11/2020'),
}

const Page = () => {
  const [email, setEmail] = useState('sharonwescorn@gmail.com');
  const [firstName, setFirstName] = useState('Hope');
  const [lastName, setLastName] = useState('Broussard')
  const [address, setAddress] = useState<string>('');
  const [suite, setSuite] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');

  const stateOptions = ["CA", "FL", "MI", "NJ"];
  const countryOptions = ["United States", "United Kingdom", "Germany", "France"];
  const orderStatusOptions = ["Submitted", "Pending", "Cancelled", "Completed"];
  const paymentStatusOptions = ["Submitted", "Pending", "Cancelled", "Completed"];

  const [state, setState] = useState<string>(stateOptions[0]);
  const [country, setCountry] = useState<string>(countryOptions[0]);
  const [orderStatus, setOrderStatus] = useState<string>(orderStatusOptions[0]);
  const [paymentStatus, setPaymentStatus] = useState<string>(paymentStatusOptions[0]);

  const onChangeState = (value: string) => {
    setState(value);
  }
  const onChangeCountry = (value: string) => {
    setCountry(value);
  }
  const onChangeOrderStatus = (value: string) => {
    setOrderStatus(value);
  }
  const onChangePaymentStatus = (value: string) => {
    setPaymentStatus(value);
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full items-center justify-center bg-background shadow gap-4">
        <div className="flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Statistics ID</div>
          <span className="font-medium text-base text-muted-1">{statistics.id}</span>
        </div>
        <div className="flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Created At</div>
          <span className="font-medium text-base text-muted-1">{statistics.createdAt.toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Updated At</div>
          <span className="font-medium text-base text-muted-1">{statistics.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:flex-[60%] gap-4 flex flex-col bg-background shadow">
          <div className="flex flex-col w-full rounded-md border border-level-1 bg-background shadow p-4 gap-8">
            <h1 className="text-primary text-xl">User Information</h1>
            <div className="flex flex-col font-medium text-base">
              <p className="text-primary">User ID</p>
              <p className="text-muted-1">saud7g7a6tdbasw352345d</p>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-md border border-level-1 bg-background shadow p-4 gap-4">
            <h1 className="text-primary text-2xl">Order Information</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">First Name</div>
                <Input placeholder="Email" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Last Name</div>
                <Input placeholder="Email" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Address</div>
                <Input placeholder="Email" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Postal Code</div>
                <Input placeholder="Email" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Suite</div>
                <Input placeholder="Email" value={suite} onChange={(e) => setSuite(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">City</div>
                <Input placeholder="Email" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Region/State</div>
                <DashSelect placeholder="Select a State" value={state} options={stateOptions} onChange={onChangeState} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Country</div>
                <DashSelect placeholder="Select a Country" value={country} options={countryOptions} onChange={onChangeCountry} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-md border border-level-1 bg-background shadow p-4 gap-4">
            <div>
              <h1 className="text-primary text-xl">Order Status</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2 md:flex-row">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Order Status</div>
                <DashSelect placeholder="Order Status" value={orderStatus} options={orderStatusOptions} onChange={onChangeOrderStatus} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-primary">Payment Status</div>
                <DashSelect placeholder="Payment Status" value={paymentStatus} options={paymentStatusOptions} onChange={onChangePaymentStatus} />
              </div>
            </div>
            <div className="flex flex-row gap-4 w-full md:w-[50%]">
              <Button variant="primary" className="flex-1">Save</Button>
              <Button variant="outline" className="flex-1">Refund</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-fit lg:flex-[40%] flex flex-col rounded-md border border-level-1 shadow p-4 text-muted-1 text-base font-medium gap-8">
          <p className="text-primary text-xl w-full">Receipt</p>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-col font-medium text-base gap-2">
              <p className="text-primary">Number</p>
              <span>23050001</span>
            </div>
            <p className="text-primary">Terms</p>
            <div className="flex flex-row items-center justify-between">
              <p className="text-primary">Subtotal</p>
              <span>$100.00</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="text-primary">Discount</p>
              <span>$0.00</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-primary">Total</p>
            <span>$100.00</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-background shadow text-muted-1 max-w-[calc(100vw-300px)]">
        <DataTableDemo data={data} columns={OrderDetailTableColumn} title="Payments" />
      </div>
    </div>
  )
}

export default Page;