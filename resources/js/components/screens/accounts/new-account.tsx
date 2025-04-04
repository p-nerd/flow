import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { useForm } from '@inertiajs/react';
import { useState } from 'react';

import { InputError } from '@/components/elements/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const NewAccount = () => {
    const [open, setOpen] = useState<boolean>(false);

    const { processing, post, data, setData, errors, reset } = useForm<{
        name: string;
    }>({
        name: '',
    });

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">Add an account</Button>
            </SheetTrigger>
            <SheetContent className="w-full space-y-4 overflow-y-auto lg:max-w-md">
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        post(route('dashboard.accounts.store'), {
                            onSuccess: () => {
                                setOpen(false);
                                reset();
                            },
                        });
                    }}
                    className="w-full space-y-4 p-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="name"
                            required={true}
                            autoFocus={true}
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="e.g. Cash, Bank, Credit Card"
                        />
                        <InputError message={errors.name} />
                    </div>
                    <Button disabled={processing} type="submit" className="w-full">
                        Create account
                    </Button>
                </form>
            </SheetContent>
        </Sheet>
    );
};
