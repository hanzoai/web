"use client";

import { DataTableDemo } from "@/components/data-table/data-table";
import { ProductsTableColumn, type ProductsTableDataType } from "@/components/data-table/product-table-column";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react";
import { useStore } from "@/stores";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const ProductsPage = observer(() => {
  const router = useRouter();
  const { productsStore, credentialStore } = useStore()
  const [data, setData] = useState()
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [searchToken, setSearchToken] = useState('')

  const onClickUser = (orderId: string) => {
    router.push(`/products/details?id=${orderId}`)
  }

  const getData = async (page: number, pageSize: number) => {
    const response = await productsStore.listProducts(page + 1, pageSize)
    const tableData = response.models.map((product: any) => ({
      id: product.id,
      slug: product.slug,
      name: product.name,
      description: product.description,
      price: product.price,
      sold: product.sold,
      created: moment(product.createdAt).format('MM/DD/YYYY'),
      updated: moment(product.updatedAt).fromNow(),
    }))
    setData(tableData)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (credentialStore.isLoggedIn) {
        clearInterval(interval)
        getData(page, pageSize)
      }
    }, 500)
  }, [])

  useEffect(() => {
    productsStore.searchTokens = {q: searchToken}
    console.log(page, pageSize)
    getData(page, pageSize)

  }, [searchToken, page])

  return (
    <div className="flex-1 space-y-4 overflow-y-auto">
      <div className="overflow-hidden bg-background shadow">
        <div className="h-full flex-1 flex-col md:flex">
          <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
          {data && <DataTableDemo
            data={data}
            columns={ProductsTableColumn}
            onClickHandler={onClickUser}
            title='Products'
            filterKey='products'
            searchKey={searchToken}
            setSearchKey={setSearchToken}
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />}
        </div>
      </div>
    </div>
  )
})

export default ProductsPage;