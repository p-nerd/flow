import type { TAccount } from '@/types/models';
import type { ColumnDef } from '@tanstack/react-table';

import { select } from '@/components/elements/table/select';
import { router } from '@inertiajs/react';
import { useState } from 'react';

import { DataTable } from '@/components/elements/table/data-table';
import { SortHeader } from '@/components/elements/table/sort-header';
import { CellActions } from './cell-actions';

export const columns: ColumnDef<TAccount>[] = [
    select(),
    {
        accessorKey: 'name',
        header: ({ column }) => <SortHeader column={column} label="Name" />,
    },
    {
        id: 'actions',
        cell: ({ row }) => <CellActions account={row.original} />,
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
