import type { TNavItem } from '@/types';

import {
    CreditCardIcon,
    FolderIcon,
    LayoutGridIcon,
    SettingsIcon,
    TagsIcon,
    WalletIcon,
} from 'lucide-react';

export const mainNavItems: TNavItem[] = [
    {
        title: 'Overview',
        href: '/dashboard/overview',
        icon: LayoutGridIcon,
    },
    {
        title: 'Transactions',
        href: '/dashboard/transactions',
        icon: CreditCardIcon,
    },
    {
        title: 'Accounts',
        href: '/dashboard/accounts',
        icon: WalletIcon,
    },
    {
        title: 'Categories',
        href: '/dashboard/categories',
        icon: TagsIcon,
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: SettingsIcon,
    },
];

export const rightNavItems: TNavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/p-nerd/flow',
        icon: FolderIcon,
    },
];
