import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';

export const NewAccount = () => {
    return (
        <Sheet>
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
                <div className="p-4">Hello</div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
