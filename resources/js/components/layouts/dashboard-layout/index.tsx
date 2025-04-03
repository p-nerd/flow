import type { BreadcrumbItem } from '@/types';
import type { ReactNode } from 'react';

import { HeaderLayout } from './header-layout';

export const DashboardLayout = ({
    children,
    breadcrumbs,
}: {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}) => {
    return <HeaderLayout breadcrumbs={breadcrumbs}>{children}</HeaderLayout>;
};
