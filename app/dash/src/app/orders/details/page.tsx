"use client";

import InputField from "@/components/DashInput/DashInput";
import DashSelect from "@/components/DashSelect/DashSelect";
import { DataTableDemo } from "@/components/DataTable/DataTable";
import { OrderDetailTableColumn, type OrderDetailTableDataType } from "@/components/DataTable/OrderDetailTableColumn";
import { Button } from "@hanzo/ui/primitives";
import { useState } from "react";

const data: OrderDetailTableDataType[] = [];

const Page = () => {
  const [email, setEmail] = useState('sharonwescorn@gmail.com');
  const [name, setName] = useState('Hope Broussard');
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
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[50%] pr-0 lg:pr-2 space-y-4">
          <div className="flex flex-col w-full rounded-[0.5rem] border bg-background shadow p-2">
            <div>
              <h1 className="text-primary text-2xl">User Information</h1>
            </div>
            <div className="flex align-top justify-between">
              <div className="flex flex-col text-muted-1 space-y-1">
                <h5 className="font-bold">User ID</h5>
                <span>K9idk9KII7</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-[0.5rem] border bg-background shadow p-2 space-y-4">
            <div>
              <h1 className="text-primary text-2xl">Order Information</h1>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <InputField placeHolder="First Name" value={email} setValue={setEmail} />
              <InputField placeHolder="Last Name" value={name} setValue={setName} />
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
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <div className="w-full md:w-[50%] md:pr-2 p-0">
                <DashSelect placeholder="Select a State" value={state} options={stateOptions} onChange={onChangeState} />
              </div>
              <div className="w-full md:w-[50%] md:pl-2 p-0">
                <DashSelect placeholder="Select a Country" value={country} options={countryOptions} onChange={onChangeCountry} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-[0.5rem] border bg-background shadow p-2 space-y-4">
            <div>
              <h1 className="text-primary text-2xl">Order Status</h1>
            </div>
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <div className="w-full md:w-[50%] md:pr-2 p-0">
                <DashSelect placeholder="Order Status" value={orderStatus} options={orderStatusOptions} onChange={onChangeOrderStatus} />
              </div>
              <div className="w-full md:w-[50%] md:pl-2 p-0">
                <DashSelect placeholder="Payment Status" value={paymentStatus} options={paymentStatusOptions} onChange={onChangePaymentStatus} />
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="primary">Save</Button>
              <Button variant="outline">Refund</Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] pl-0 lg:pl-2 pt-4 lg:pt-0">
          <div className="flex flex-col w-full rounded-[0.5rem] border bg-background shadow p-2 text-muted-1">
            <div>
              <h1 className="text-primary text-2xl">Receipt</h1>
            </div>
            <div className="pt-4">
              <h5 className="font-bold">Number</h5>
              <span>23050001</span>
            </div>
            <div className="pt-4">
              <h5 className="font-bold">Terms</h5>
              <div className="flex flex-row items-center justify-between">
                <h5 className="font-bold">Subtotal</h5>
                <span>$100.00</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <h5 className="font-bold">Discount</h5>
                <span>$0.00</span>
              </div>
              <div className="flex flex-row items-center justify-between pt-4">
                <h5 className="font-bold">Total</h5>
                <span>$100.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-full rounded-[0.5rem] border bg-background shadow p-2 text-muted-1 max-w-[calc(100vw-366px)]">
        <div>
          <h1 className="text-primary text-2xl">Payments</h1>
        </div>
        <div className="space-y-4">
          <DataTableDemo data={data} columns={OrderDetailTableColumn} filterKey="externalId" />
        </div>
      </div>
    </div>
  )
}

export default Page;