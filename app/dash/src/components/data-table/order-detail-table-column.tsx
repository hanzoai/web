"use client";

import type { ColumnDef } from "@tanstack/react-table"

import { Button, Checkbox } from "@hanzo/ui/primitives"
import { ArrowUpDown } from "lucide-react"

export interface OrderDetailTableDataType {
  externalId: string
  type: string
  last: string
  ip: string
  country: string
  status: string
  fee: number
  amount: number
  refunded: string
}

export const OrderDetailTableColumn: ColumnDef<OrderDetailTableDataType>[] = [
  {
    accessorKey: "externalId",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center whitespace-nowrap"
        >
          External Id
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("externalId")}</div>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Type
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "last",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center whitespace-nowrap"
        >
          Last 4
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("last")}</div>,
  },
  {
    accessorKey: "ip",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          IP
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("ip")}</div>,
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Country
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("country")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Status
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("status")}</div>,
  },
  {
    accessorKey: "fee",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Fee
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("fee")}</div>,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Amount
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("amount")}</div>,
  },
  {
    accessorKey: "refunded",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center"
        >
          Refunded
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("refunded")}</div>,
  },
]