"use client";

import type { ColumnDef } from "@tanstack/react-table"

import { Button, Checkbox } from "@hanzo/ui/primitives"
import { ArrowUpDown } from "lucide-react"

export interface UserOrderTableDataType {
  number: string;
  total: string;
  orderStatus: string;
  paymentStatus: string;
  state: string;
  country: string;
  created: string;
  updated: string;
}

export const UserOrderTableColumn: ColumnDef<UserOrderTableDataType>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <div
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Number
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("number")}</div>,
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <div
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("total")}</div>,
  },
  {
    accessorKey: "orderStatus",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order Status
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("orderStatus")}</div>,
  },
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Payment Status
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("paymentStatus")}</div>,
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return (
        <div
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          State
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("state")}</div>,
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <div
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("country")}</div>,
  },
  {
    accessorKey: "created",
    header: ({ column }) => {
      return (
        <div
          className="text-center"
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
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center whitespace-nowrap">{row.getValue("updated")}</div>,
  },
]