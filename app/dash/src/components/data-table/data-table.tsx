"use client"

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState
} from "@tanstack/react-table"

import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@hanzo/ui/primitives"

import React, { type Dispatch, type SetStateAction } from "react"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { CSV } from "@/components/icons"

interface HasId {
  id: string
}

export function DataTableDemo<T extends HasId>(
  props: {
    data: T[];
    columns: ColumnDef<T>[];
    onClickHandler?: (id: any) => void;
    filterKey?: string;
    title: string,
    searchKey?: string,
    setSearchKey?: Dispatch<SetStateAction<string>>,
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    pageSize?: number;
    setPageSize?: Dispatch<SetStateAction<number>>;
  }
) {
  const {
    data,
    columns,
    filterKey,
    onClickHandler,
    title,
    searchKey,
    setSearchKey,
    page,
    setPage,
    pageSize,
    setPageSize
  } = props;

  const router = useRouter();

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [search, setSearch] = React.useState('')

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

  const handleSearch = () => {
    setSearchKey?.(search)
  }

  return (
    <div className="w-full flex flex-col p-2 md:p-4 gap-4">
      {
        filterKey && <>
          <div className="flex items-center flex-row gap-2">
            <div className="flex flex-row border rounded-md border-level-1 items-center px-2 py-1 w-full">
              <SearchIcon className="text-muted-2" />
              <Input
                placeholder='Search'
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                className="w-full outline-none border-none bg-transparent ring-offset-background focus-visible:ring-background"
              />
            </div>
            <Button variant='secondary' className="h-12 !font-medium bg-level-1 min-w-28" size='default' onClick={handleSearch}>Search</Button>
            <Button variant='secondary' className="hidden md:block h-12 !font-medium bg-level-1 min-w-28" size='default' onClick={() => router.push('/' + title.toLowerCase() + '/create')}>Create +</Button>
            <Button variant="secondary" className="h-12 font-medium !bg-level-1 hidden md:flex flex-row gap-2 min-w-28" size='default'>
              <CSV /> <div>CSV</div>
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
          <div className="flex md:hidden items-center flex-row gap-2 justify-end">
            <Button variant='secondary' className="h-12 !font-medium bg-level-1 min-w-28" size='default'>
              Create +
            </Button>
            <Button variant="secondary" className="h-12 font-medium !bg-level-1 flex-row gap-2 min-w-28" size='default'>
              <CSV /> <div>CSV</div>
            </Button>
          </div>
        </>
      }
      <div className="rounded-md border border-level-1 custom-scroll text-muted-2 p-4 flex flex-col gap-4">
        <div className="text-xl text-medium text-primary">{title}</div>
        <Table>
          <TableHeader>
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
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => onClickHandler?.(row.original)}
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
                )
              })
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
            onClick={() => setPage(page - 1)}
            disabled={page ? page <= 0 : true}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page + 1)}
            disabled={!data.length}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}