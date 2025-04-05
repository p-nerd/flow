import type { TTransaction } from '@/types/models';
import type { ColumnDef } from '@tanstack/react-table';

import { select } from '@/components/elements/table/select';
import { router } from '@inertiajs/react';
import { useState } from 'react';

import { DataTable } from '@/components/elements/table/data-table';
import { SortHeader } from '@/components/elements/table/sort-header';
import { TransactionActions } from './transaction-actions';

export const columns: ColumnDef<TTransaction>[] = [
    select(),
    {
        accessorKey: 'notes',
        header: ({ column }) => <SortHeader column={column} label="Notes" />,
    },
    {
        id: 'actions',
        cell: ({ row }) => <TransactionActions transaction={row.original} />,
    },
];

export const TransactionsTable = ({ transactions }: { transactions: TTransaction[] }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div>
            <DataTable
                columns={columns}
                data={transactions}
                searchable={['notes']}
                disabled={loading}
                onDelete={(transactions, onSuccess) => {
                    router.delete(route('dashboard.transactions.destroys'), {
                        data: { ids: transactions.map((transaction) => transaction.id) },
                        onStart: () => setLoading(true),
                        onFinish: () => setLoading(false),
                        onSuccess: onSuccess,
                    });
                }}
            />
        </div>
    );
};
