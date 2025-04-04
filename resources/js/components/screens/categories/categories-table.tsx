import type { TCategory } from '@/types/models';
import type { ColumnDef } from '@tanstack/react-table';

import { select } from '@/components/elements/table/select';
import { router } from '@inertiajs/react';
import { useState } from 'react';

import { DataTable } from '@/components/elements/table/data-table';
import { SortHeader } from '@/components/elements/table/sort-header';
import { CategoryActions } from './category-actions';

export const columns: ColumnDef<TCategory>[] = [
    select(),
    {
        accessorKey: 'name',
        header: ({ column }) => <SortHeader column={column} label="Name" />,
    },
    {
        id: 'actions',
        cell: ({ row }) => <CategoryActions category={row.original} />,
    },
];

export const CategoriesTable = ({ categories }: { categories: TCategory[] }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div>
            <DataTable
                columns={columns}
                data={categories}
                searchable={['name']}
                disabled={loading}
                onDelete={(categories, onSuccess) => {
                    router.delete(route('dashboard.categories.destroys'), {
                        data: { ids: categories.map((category) => category.id) },
                        onStart: () => setLoading(true),
                        onFinish: () => setLoading(false),
                        onSuccess: onSuccess,
                    });
                }}
            />
        </div>
    );
};
