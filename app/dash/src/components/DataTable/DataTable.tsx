"use client"

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import type { ColumnDef, ColumnFiltersState, SortingState, VisibilityState } from "@tanstack/react-table"

import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue, Button, Input, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@hanzo/ui/primitives"
import React from "react"
import { SearchIcon } from "lucide-react"

export function DataTableDemo<T>(props: { data: T[]; columns: ColumnDef<T>[]; onClickHandler?: (id: string) => void; filterKey?: string; }) {
  const { data, columns, filterKey, onClickHandler } = props;
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full flex flex-col py-4 gap-4">
      {
        filterKey &&
        <div className="flex items-center flex-row gap-4">
          <div className="flex flex-row border rounded-md items-center px-2 w-full">
            <SearchIcon className="text-muted-2" />
            <Input
              placeholder={`Filter ${filterKey}...`}
              value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn(filterKey)?.setFilterValue(event.target.value)
              }
              className="w-full border-none hover:border-none focus:border-none focus-visible:border-none"
            />
          </div>
          <Button variant='secondary' className="!h-full !text-sm !font-medium">Search</Button>
          <Button variant='secondary' className="!h-full !text-sm !font-medium">
            Create +
          </Button>
          <Button variant='secondary' className="!h-full !text-sm !font-medium">
            CSV
          </Button>
        </div>
      }
      <div className="w-full">
        <Select>
          <SelectTrigger className="text-muted-2">
            <SelectValue placeholder='More Options' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light' className="text-muted-2">Light</SelectItem>
            <SelectItem value='dark' className="text-muted-2">Dark</SelectItem>
            <SelectItem value='system' className="text-muted-2">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border custom-scroll text-muted-2 p-4 flex flex-col gap-4">
        <div className="text-xl text-medium">Users</div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="!text-muted-2 rounded-md">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="!text-muted-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => onClickHandler?.(row.id)}
                  className="hover:cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2 flex">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}