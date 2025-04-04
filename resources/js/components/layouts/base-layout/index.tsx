import type { ReactNode } from 'react';

import { useBaseMount } from '@/hooks/use-base-mount';

import { Toaster } from '@/components/ui/sonner';

export const BaseLayout = ({ children }: { children: ReactNode }) => {
    useBaseMount();

    return (
        <>
            {children}
            <Toaster />
        </>
    );
};
