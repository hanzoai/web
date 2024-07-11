"use client"

import InputField from "@/components/DashInput/DashInput";
import { Button } from "@hanzo/ui/primitives";
import { useState } from "react";

const Page = () => {
  const [slug, setSlug] = useState<string>("trunk-show-XXL-XXL");
  const [sku, setSku] = useState<string>('');
  const [name, setName] = useState<string>('Trunk Show XXL Top XXL Bottom');
  const [description, setDescription] = useState<string>("For women that will elevate our brank through creative content creation + bikinisthat save the planet. We set up the store and mage the fulfillment, while you make 20% of every sale. Introducing YOU X KARMA");
  const [displayPrice, setDisplayPrice] = useState<number>(400);
  const [msrp, setMsrp] = useState<number>(400);
  const [projectedPrice, setProjectedPrice] = useState<number>(400);

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
          <div className="flex flex-col text-muted-1 space-y-1">
            <h5 className="font-bold">Units Sold</h5>
            <span>0</span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-[0.5rem] border bg-background shadow p-2 text-muted-1">
        <div>
          <h1 className="text-primary text-2xl">Default Shipping Information</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[50%] lg:pr-2 p-0">
            <InputField placeHolder="Slug" value={slug} setValue={setSlug} />
          </div>
          <div className="w-full lg:w-[50%] lg:pl-2 p-0">
            <InputField placeHolder="SKU" value={sku} setValue={setSku} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <InputField placeHolder="Name" value={name} setValue={setName} />
        </div>
        <div className="flex flex-col lg:flex-row">
          <InputField placeHolder="Description" value={description} setValue={setDescription} />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[33%] lg:pr-2 p-0">
            <InputField placeHolder="Display Price" value={displayPrice} setValue={setDisplayPrice} />
          </div>
          <div className="w-full lg:w-[33%] lg:pr-2 p-0">
            <InputField placeHolder="MSRP" value={msrp} setValue={setMsrp} />
          </div>
          <div className="w-full lg:w-[34%] lg:pl-2 p-0">
            <InputField placeHolder="Projected Price" value={projectedPrice} setValue={setProjectedPrice} />
          </div>
        </div>
        <div>
          <Button>Save</Button>
        </div>
      </div>
    </div>
  )
}

export default Page;