import { type TBreadcrumb } from '@/types';
import { type PropsWithChildren } from 'react';

import { Content } from './content';
import { Shell } from './shell';
import { Sidebar } from './sidebar';
import { SidebarHeader } from './sidebar-header';

export function SidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: TBreadcrumb[] }>) {
    return (
        <Shell variant="sidebar">
            <Sidebar />
            <Content variant="sidebar">
                <SidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </Content>
        </Shell>
    );
}
