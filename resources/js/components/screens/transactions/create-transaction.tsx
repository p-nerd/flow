import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import type { TOption } from '@/types';

import { useForm } from '@inertiajs/react';
import { useState } from 'react';

import { Message } from '@/components/elements/message';
import { SelectOptions } from '@/components/inputs/select-options';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusIcon } from 'lucide-react';

export const CreateTranaction = ({
    accounts,
    categories,
}: {
    accounts: TOption[];
    categories: TOption[];
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const { processing, post, data, setData, errors, reset } = useForm<{
        account_id: string;
        category_id: string;
        notes: string;
    }>({
        account_id: '',
        category_id: '',
        notes: '',
    });

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-full lg:w-min">
                    <PlusIcon className="size-4" />
                    Add an transaction
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full space-y-4 overflow-y-auto lg:max-w-md">
                <SheetHeader>
                    <SheetTitle>New Transaction</SheetTitle>
                    <SheetDescription>
                        Create a new transaction to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        post(route('dashboard.transactions.store'), {
                            onSuccess: () => {
                                setOpen(false);
                                reset();
                            },
                        });
                    }}
                    className="w-full space-y-4 p-4"
                >
                    <SelectOptions
                        label="Account"
                        name="account"
                        value={data.account_id}
                        error={errors.account_id}
                        onValue={(value) => setData('account_id', value)}
                        placeholder="Select Account"
                        options={accounts}
                    />
                    <SelectOptions
                        label="Category"
                        name="category"
                        value={data.category_id}
                        error={errors.category_id}
                        onValue={(value) => setData('category_id', value)}
                        placeholder="Select Category"
                        options={categories}
                    />
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
                        Create transaction
                    </Button>
                </form>
            </SheetContent>
        </Sheet>
    );
};
