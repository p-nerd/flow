import type { ReactNode } from 'react';

import { Head } from '@inertiajs/react';
import { HeaderLayout } from './header-layout';

export const DashboardLayout = ({
    children,
    title,
    href,
}: {
    children: ReactNode;
    title: string;
    href: string;
}) => {
    return (
        <HeaderLayout breadcrumbs={[{ title, href }]}>
            <Head title={title} />
            {children}
        </HeaderLayout>
    );
};
