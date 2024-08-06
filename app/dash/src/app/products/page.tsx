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
        <div className="h-full flex-1 flex-col md:flex">
          <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
          <DataTableDemo data={data} columns={ProductsTableColumn} onClickHandler={onClickUser} filterKey="slug" title='Products' />
        </div>
      </div>
    </div>
  )
};

export default UniversalPage;