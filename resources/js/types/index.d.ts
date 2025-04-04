import type { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import type { TUser } from './models';

export type TBreadcrumb = {
    title: string;
    href: string;
};

export type TNavItem = {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
};

export type TSharedData = {
    name: string;
    quote: { message: string; author: string };
    auth: { user: TUser };
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    flash: { success: string; error: string };
};
