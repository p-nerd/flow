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

import { DatePicker } from '@/components/inputs/date-picker';
import { SelectOptions } from '@/components/inputs/select-options';
import { TextInput } from '@/components/inputs/text-input';
import { TextareaInput } from '@/components/inputs/textarea-input';
import { Button } from '@/components/ui/button';
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
        transaction_at: string;
        payee: string;
        notes: string;
    }>({
        account_id: '',
        category_id: '',
        transaction_at: '',
        payee: '',
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
                        required={true}
                    />
                    <SelectOptions
                        label="Category"
                        name="category"
                        value={data.category_id}
                        error={errors.category_id}
                        onValue={(value) => setData('category_id', value)}
                        placeholder="Select Category"
                        options={categories}
                        required={true}
                    />
                    <DatePicker
                        label="Date"
                        name="transaction_at"
                        value={data.transaction_at}
                        error={errors.transaction_at}
                        onValue={(value) => setData('transaction_at', value)}
                        placeholder="Select transaction date"
                        required={true}
                    />
                    <TextInput
                        label="Payee"
                        name="payee"
                        value={data.payee}
                        error={errors.payee}
                        onValue={(value) => setData('payee', value)}
                        placeholder="e.g. Walmart, Amazon, Rent"
                        required={true}
                    />
                    <TextareaInput
                        label="Notes"
                        name="notes"
                        value={data.notes}
                        error={errors.notes}
                        onValue={(value) => setData('notes', value)}
                        placeholder="e.g. Monthly grocery shopping"
                        required={true}
                    />
                    <Button disabled={processing} type="submit" className="w-full">
                        Create transaction
                    </Button>
                </form>
            </SheetContent>
        </Sheet>
    );
};
