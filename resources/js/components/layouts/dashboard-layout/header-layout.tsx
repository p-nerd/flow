import type { TBreadcrumb } from '@/types';
import type { ReactNode } from 'react';

import { Content } from './content';
import { Header } from './header';
import { Shell } from './shell';

export function HeaderLayout({
    children,
    breadcrumbs,
}: {
    children: ReactNode;
    breadcrumbs?: TBreadcrumb[];
}) {
    return (
        <Shell>
            <Header breadcrumbs={breadcrumbs} />
            <Content>{children}</Content>
        </Shell>
    );
}
