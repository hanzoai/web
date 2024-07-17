"use client";

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

export interface ProductsTableDataType {
  slug: string;
  name: string;
  description: string;
  price: number;
  sold: number;
  created: string;
  updated: string;
}

export const ProductsTableColumn: ColumnDef<ProductsTableDataType>[] = [
  {
    accessorKey: "slug",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Slug
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("slug")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("description")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("price")}</div>,
  },
  {
    accessorKey: "sold",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sold
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("sold")}</div>,
  },
  {
    accessorKey: "created",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center whitespace-nowrap">{row.getValue("created")}</div>,
  },
  {
    accessorKey: "updated",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center whitespace-nowrap">{row.getValue("updated")}</div>,
  },
]