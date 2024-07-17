"use client"

import { Button, Input, TextArea, Switch } from "@hanzo/ui/primitives";
import { useState } from "react";

type UserStatisticsType = {
  id: string
  createdAt: Date
  updatedAt: Date
  units_sold: number
}

type ProductInfoType = {
  slug: string
  sku: string
  email: string
  description: string
  display_price: number
  msrf: number
  projectd_price: number
}

const statistics: UserStatisticsType = {
  id: 'K9idk9KII7',
  createdAt: new Date('10/11/2020'),
  updatedAt: new Date('10/11/2020'),
  units_sold: 0
}

const Page = () => {
  const [slug, setSlug] = useState<string>("trunk-show-XXL-XXL");
  const [sku, setSku] = useState<string>('');
  const [name, setName] = useState<string>('Trunk Show XXL Top XXL Bottom');
  const [description, setDescription] = useState<string>("Introducing YOU X KARMA");
  const [displayPrice, setDisplayPrice] = useState<string>('$400');
  const [msrf, setMsrf] = useState<string>('$400');
  const [projectedPrice, setProjectedPrice] = useState<string>('0');

  return (
    <div className="flex flex-col space-y-4 p-4 overflow-y-auto w-full">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full items-center justify-center bg-background shadow gap-4">
        <div className="flex flex-col border border-[#AAAAAA33] rounded-md p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Statistics ID</div>
          <span className="font-medium text-base text-muted-1">{statistics.id}</span>
        </div>
        <div className="flex flex-col border border-[#AAAAAA33] rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Created At</div>
          <span className="font-medium text-base text-muted-1">{statistics.createdAt.toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col border border-[#AAAAAA33] rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Updated At</div>
          <span className="font-medium text-base text-muted-1">{statistics.createdAt.toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col border border-[#AAAAAA33] rounded-md text-muted-1 p-4 gap-2">
          <div className="font-medium text-xl text-foreground">Units Sold</div>
          <span className="font-medium text-base text-muted-1">{statistics.units_sold}</span>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-full rounded-md border border-[#AAAAAA33] bg-background shadow p-4 text-muted-1">
        <div>
          <h1 className="text-primary text-2xl">Product Information</h1>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row w-full">
          <div className="flex-1 flex flex-col gap-2 w-full">
            <div className="text-sm text-primary">Slug</div>
            <Input placeholder="Slug" value={slug} onChange={() => setSlug} />
          </div>
          <div className="flex-1 flex flex-col gap-2 w-full">
            <div className="text-sm text-primary">SKU</div>
            <Input placeholder="SKU" value={sku} onChange={() => setSku} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-primary">Email</div>
          <Input placeholder="Email" value={name} onChange={() => setName} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-primary">Description</div>
          <TextArea placeholder="Description" value={description} onChange={() => setDescription} className="bg-background" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-between gap-6 md:flex-row w-full">
          <div className="flex flex-col gap-2 w-full">
            <div className="text-sm text-primary">Display Price</div>
            <Input placeholder="Display Price" value={displayPrice} onChange={() => setDisplayPrice} />
            <div className="flex text-sm text-primary gap-2">
              <p>Preorder</p>
              <Switch className="bg-[#AAAAAA33] data-[state=checked]:bg-[#375DFB]" ></Switch>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="text-sm text-primary">MSRF(Optional)</div>
            <Input placeholder="MSRP" value={msrf} onChange={() => setMsrf} />
            <div className="flex text-sm text-primary gap-2">
              <p>Taxable</p>
              <Switch className="bg-[#AAAAAA33] data-[state=checked]:bg-[#375DFB]" ></Switch>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="text-sm text-primary">Project Price(Optional)</div>
            <Input placeholder="Projected Price" value={projectedPrice} onChange={() => setProjectedPrice} />
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