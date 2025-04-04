import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { TAccount } from '@/types/models';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { EditIcon, MoreHorizontalIcon } from 'lucide-react';
import { EditAccount } from './edit-account';

export const CellActions = ({ account }: { account: TAccount }) => {
    const [editOpen, setEditOpen] = useState<boolean>(false);

    return (
        <>
            <EditAccount open={editOpen} setOpen={setEditOpen} account={account} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontalIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setEditOpen(true)}>
                        <EditIcon className="size-4" />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setEditOpen(true)}>
                        <EditIcon className="size-4" />
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
