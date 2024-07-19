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

export function DataTableDemo<T>(props: { data: T[]; columns: ColumnDef<T>[]; onClickHandler?: (id: string) => void; filterKey?: string; title: string}) {
  const { data, columns, filterKey, onClickHandler, title } = props;
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
        filterKey && <>
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
          <div className="w-full">
            <Select>
              <SelectTrigger className="text-muted-2">
                <SelectValue placeholder='More Options' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='option1' className="text-muted-2">Option1</SelectItem>
                <SelectItem value='option2' className="text-muted-2">Option2</SelectItem>
                <SelectItem value='option3' className="text-muted-2">Option3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </>
      }
      <div className="rounded-md border border-[#AAAAAA33] custom-scroll text-muted-2 p-4 flex flex-col gap-4">
        <div className="text-xl text-medium text-primary">{title}</div>
        <Table>
          <TableHeader className="border-[#AAAAAA33]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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