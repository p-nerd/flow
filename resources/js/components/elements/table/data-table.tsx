import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import type { ColumnDef, Row, SortingState } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrashIcon } from 'lucide-react';
import { Confirmation } from '../confirmation';

export const DataTable = <TData, TValue>({
    columns,
    data,
    searchable,
    onDelete,
    disabled,
}: {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchable: string[];
    onDelete: (data: TData[], onSuccess: () => void) => void;
    disabled: boolean;
}) => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [rowSelection, setRowSelection] = useState({});

    const handleGlobalFilterFn = () => {
        return <TData,>(row: Row<TData>, columnId: string, filterValue: string) => {
            return (
                searchable?.includes(columnId) &&
                String(row.getValue(columnId) ?? '')
                    ?.toLowerCase()
                    ?.includes(filterValue?.toLowerCase())
            );
        };
    };

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
            rowSelection,
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: handleGlobalFilterFn(),
        onRowSelectionChange: setRowSelection,
    });

    return (
        <div>
            <div className="flex items-center justify-between space-x-2 py-4">
                <Input
                    placeholder={cn(`Filter ${searchable.join(',')}...`)}
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="max-w-sm"
                />
                {table.getFilteredSelectedRowModel().rows.length > 0 && (
                    <Confirmation
                        actionText="Delete"
                        onAction={() =>
                            onDelete(
                                table.getFilteredSelectedRowModel().rows.map((row) => row.original),
                                () => table.resetRowSelection(),
                            )
                        }
                    >
                        <Button disabled={disabled} variant="destructive">
                            <TrashIcon className="size-4" /> Delete (
                            {table.getFilteredSelectedRowModel().rows.length})
                        </Button>
                    </Confirmation>
                )}
            </div>
            <div className="rounded-md border">
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
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="text-muted-foreground text-sm">
                    {table.getFilteredSelectedRowModel().rows.length} of{' '}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="flex items-center space-x-2">
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
    );
};
