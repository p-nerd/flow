import type { TBreadcrumb } from '@/types';
import type { ReactNode } from 'react';

import { HeaderLayout } from './header-layout';

export const DashboardLayout = ({
    children,
    breadcrumbs,
}: {
    children: ReactNode;
    breadcrumbs?: TBreadcrumb[];
}) => {
    return <HeaderLayout breadcrumbs={breadcrumbs}>{children}</HeaderLayout>;
};
