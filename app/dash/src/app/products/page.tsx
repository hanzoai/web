"use client";

import { DataTableDemo } from "@/components/data-table/data-table";
import { ProductsTableColumn, type ProductsTableDataType } from "@/components/data-table/product-table-column";
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
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="overflow-hidden bg-background shadow">
        <div className="h-full flex-1 flex-col space-y-8 px-8 md:flex max-w-[calc(100vw-300px)]">
          <div className="space-y-4">
            <DataTableDemo data={data} columns={ProductsTableColumn} onClickHandler={onClickUser} filterKey="slug" title='Products'/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UniversalPage;