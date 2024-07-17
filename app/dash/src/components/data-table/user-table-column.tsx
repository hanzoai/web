"use client";

import type { ColumnDef } from "@tanstack/react-table"

import { Button, Checkbox } from "@hanzo/ui/primitives"
import { ArrowUpDown } from "lucide-react"

export interface UserTableDataType {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
  created: string;
  updated: string;
}

export const UserTableColumn: ColumnDef<UserTableDataType>[] = [
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          className="text-left"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-left">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("firstName")}</div>,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("lastName")}</div>,
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <div
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
        </div>
      )
    },
    cell: ({ row }) => <div className="text-center">{row.getValue("city")}</div>,
  },
  {
    accessorKey: "postalCode",
    header: ({ column }) => {
      return (
        <div
          className="text-center whitespace-nowrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Postal Code
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("postalCode")}</div>,
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
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("state")}</div>,
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
    cell: ({ row }) => <div className="text-center whitespace-nowrap">{row.getValue("country")}</div>,
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
    cell: ({ row }) => <div className="lowercase text-center">{row.getValue("created")}</div>,
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