import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { TAccount } from '@/types/models';

import { router } from '@inertiajs/react';
import { useState } from 'react';

import { Confirmation } from '@/components/elements/confirmation';
import { Button } from '@/components/ui/button';
import { EditIcon, MoreHorizontalIcon, TrashIcon } from 'lucide-react';
import { EditAccount } from './edit-account';

export const AccountActions = ({ account }: { account: TAccount }) => {
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

    const handleAction = () => {
        router.delete(route('dashboard.accounts.destroy', account));
    };

    return (
        <>
            <EditAccount open={editOpen} setOpen={setEditOpen} account={account} />
            <Confirmation open={deleteOpen} setOpen={setDeleteOpen} onAction={handleAction} />
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
                    <DropdownMenuItem onClick={() => setDeleteOpen(true)} variant="destructive">
                        <TrashIcon className="size-4" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
