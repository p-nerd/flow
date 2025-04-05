import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

import type { TTransaction } from '@/types/models';

import { useForm } from '@inertiajs/react';

import { Message } from '@/components/elements/message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const EditTransaction = ({
    open,
    setOpen,
    transaction,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    transaction: TTransaction;
}) => {
    const { processing, patch, data, setData, errors, reset } = useForm<{
        notes: string;
    }>({
        notes: transaction.notes,
    });

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="w-full space-y-4 overflow-y-auto lg:max-w-md">
                <SheetHeader>
                    <SheetTitle>Edit '{transaction.id}' transaction</SheetTitle>
                    <SheetDescription>Edit the transaction for updating info.</SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        patch(route('dashboard.transactions.update', transaction), {
                            onSuccess: () => {
                                setOpen(false);
                                reset();
                            },
                        });
                    }}
                    className="w-full space-y-4 p-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="name">Notes</Label>
                        <Input
                            id="notes"
                            type="notes"
                            required={true}
                            autoFocus={true}
                            tabIndex={1}
                            autoComplete="notes"
                            value={data.notes}
                            onChange={(e) => setData('notes', e.target.value)}
                            placeholder="e.g. Hello World"
                        />
                        <Message error={errors.notes} />
                    </div>
                    <Button disabled={processing} type="submit" className="w-full">
                        Update transaction
                    </Button>
                </form>
            </SheetContent>
        </Sheet>
    );
};
