import type { Column } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { ArrowUpDownIcon } from 'lucide-react';

export const SortHeader = <TValue,>({
    column,
    label,
}: {
    column: Column<TValue>;
    label: ReactNode;
}) => {
    return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
            {label}
            <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
    );
};
