"use client";

import type { ColumnDef } from "@tanstack/react-table"

export interface OrderTableDataType {
  number: string;
  userEmail: string;
  total: string;
  orderStatus: string;
  paymentStatus: string;
  state: string;
  country: string;
  created: string;
  updated: string;
}

export const OrderTableColumn: ColumnDef<OrderTableDataType>[] = [
  {
    accessorKey: "number",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Number
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("number")}</div>,
  },
  {
    accessorKey: "userEmail",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Email
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("userEmail")}</div>,
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("total")}</div>,
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
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("orderStatus")}</div>,
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
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("paymentStatus")}</div>,
  },
  {
    accessorKey: "state",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          State
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("state")}</div>,
  },
  {
    accessorKey: "country",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Country
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("country")}</div>,
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