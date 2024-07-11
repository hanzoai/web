"use client";

import { DataTableDemo } from "@/components/DataTable/DataTable";
import { ProductsTableColumn, type ProductsTableDataType } from "@/components/DataTable/ProductTableColumn";
import { useRouter } from "next/navigation";

const data: ProductsTableDataType[] = [
  {
    slug: "trunk-show-XXL-XXL",
    name: "Trunk Show XXL Top XXL Bottom",
    description: "For women that will elevate our brank through creative content creation + bikinisthat save the planet. We set up the store and mage the fulfillment, while you make 20% of every sale. Introducing YOU X KARMA",
    price: 400,
    sold: 0,
    created: new Date().toLocaleDateString(),
    updated: "4 years ago"
  },
  {
    slug: "trunk-show-XXL-XXL",
    name: "Trunk Show XXL Top XXL Bottom",
    description: "For women that will elevate our brank through creative content creation + bikinisthat save the planet. We set up the store and mage the fulfillment, while you make 20% of every sale. Introducing YOU X KARMA",
    price: 400,
    sold: 0,
    created: new Date().toLocaleDateString(),
    updated: "4 years ago"
  },
  {
    slug: "trunk-show-XXL-XXL",
    name: "Trunk Show XXL Top XXL Bottom",
    description: "For women that will elevate our brank through creative content creation + bikinisthat save the planet. We set up the store and mage the fulfillment, while you make 20% of every sale. Introducing YOU X KARMA",
    price: 400,
    sold: 0,
    created: new Date().toLocaleDateString(),
    updated: "4 years ago"
  },
  {
    slug: "trunk-show-XXL-XXL",
    name: "Trunk Show XXL Top XXL Bottom",
    description: "For women that will elevate our brank through creative content creation + bikinisthat save the planet. We set up the store and mage the fulfillment, while you make 20% of every sale. Introducing YOU X KARMA",
    price: 400,
    sold: 0,
    created: new Date().toLocaleDateString(),
    updated: "4 years ago"
  },
];

const UniversalPage = () => {
  const router = useRouter();

  const onClickUser = (orderId: string) => {
    router.push(`/products/details?id=${orderId}`)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 overflow-y-auto">
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="h-full flex-1 flex-col space-y-4 p-8 md:flex max-w-[calc(100vw-366px)]">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Products
              </h2>
              <p className="text-muted-1">Here's a list of products</p>
            </div>
          </div>
          <div className="space-y-2">
            <DataTableDemo data={data} columns={ProductsTableColumn} onClickHandler={onClickUser} filterKey="slug" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default UniversalPage;