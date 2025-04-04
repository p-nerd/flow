import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';

import type { TCategory } from '@/types/models';

import { useForm } from '@inertiajs/react';

import { Message } from '@/components/elements/message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const EditCategory = ({
    open,
    setOpen,
    category,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
    category: TCategory;
}) => {
    const { processing, patch, data, setData, errors, reset } = useForm<{
        name: string;
    }>({
        name: category.name,
    });

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="w-full space-y-4 overflow-y-auto lg:max-w-md">
                <SheetHeader>
                    <SheetTitle>Edit '{category.name}' category</SheetTitle>
                    <SheetDescription>
                        Edit the category for updating the category info.
                    </SheetDescription>
                </SheetHeader>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        patch(route('dashboard.categories.update', category), {
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
                        <Message error={errors.name} />
                    </div>
                    <Button disabled={processing} type="submit" className="w-full">
                        Update category
                    </Button>
                </form>
            </SheetContent>
        </Sheet>
    );
};
