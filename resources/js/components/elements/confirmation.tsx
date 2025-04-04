import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import type { ReactNode } from 'react';

import { useState } from 'react';

import { CheckIcon, XIcon } from 'lucide-react';

export const Confirmation = ({
    onAction,
    title,
    description,
    actionText,
    children,
    open,
    setOpen,
}: {
    onAction: () => void;
    title?: string;
    description?: ReactNode;
    actionText?: string;
    children?: ReactNode;
    open?: boolean;
    setOpen?: () => void;
}) => {
    const [localOpen, setLocalOpen] = useState<boolean>(false);

    return (
        <AlertDialog
            open={open !== undefined ? open : localOpen}
            onOpenChange={setOpen !== undefined ? setOpen : setLocalOpen}
        >
            {children && <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title || 'Are you absolutely sure?'}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description || 'This action will permanently delete the data'}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        <XIcon className="mr-2 h-4 w-4" />
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onAction}
                        className="bg-destructive hover:bg-destructive/90"
                    >
                        <CheckIcon className="mr-2 h-4 w-4" />
                        {actionText || 'Continue'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
