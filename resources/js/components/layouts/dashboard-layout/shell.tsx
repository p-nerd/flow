import type { TSharedData } from '@/types';

import { usePage } from '@inertiajs/react';

import { SidebarProvider } from '@/components/ui/sidebar';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function Shell({ children, variant = 'header' }: AppShellProps) {
    const isOpen = usePage<TSharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>;
}
