import { Checkbox } from '@/components/ui/checkbox';
import { CellContext, HeaderContext } from '@tanstack/react-table';

export const select = <TData, TValue>() => {
    return {
        id: 'select',
        header: ({ table }: HeaderContext<TData, TValue>) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }: CellContext<TData, TValue>) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    };
};
