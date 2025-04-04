import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { TAccount } from '@/types/models';
import type { ColumnDef } from '@tanstack/react-table';

import { select } from '@/components/elements/table/select';

import { SortHeader } from '@/components/elements/table/sort-header';
import { Button } from '@/components/ui/button';
import { MoreHorizontalIcon } from 'lucide-react';

export const columns: ColumnDef<TAccount>[] = [
    select(),
    {
        accessorKey: 'name',
        header: ({ column }) => <SortHeader column={column} label="Name" />,
    },
    {
        accessorKey: 'plaid_id',
        header: 'Plaid ID',
        cell: ({ row }) => row.original.plaid_id || 'N/A',
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const account = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontalIcon className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(account.id)}>
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
