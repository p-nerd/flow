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

import { DataTable } from '@/components/elements/table/data-table';
import { SortHeader } from '@/components/elements/table/sort-header';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { MoreHorizontalIcon } from 'lucide-react';
import { useState } from 'react';

export const columns: ColumnDef<TAccount>[] = [
    select(),
    {
        accessorKey: 'name',
        header: ({ column }) => <SortHeader column={column} label="Name" />,
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

export const AccountsTable = ({ accounts }: { accounts: TAccount[] }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div>
            <DataTable
                columns={columns}
                data={accounts}
                searchable={['name']}
                disabled={loading}
                onDelete={(accounts, onSuccess) => {
                    router.delete(route('dashboard.accounts.destroys'), {
                        data: { ids: accounts.map((account) => account.id) },
                        onStart: () => setLoading(true),
                        onFinish: () => setLoading(false),
                        onSuccess: onSuccess,
                    });
                }}
            />
        </div>
    );
};
