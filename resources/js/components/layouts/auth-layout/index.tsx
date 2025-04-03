import type { ReactNode } from 'react';

import { SimpleLayout } from './simple-layout';

export function AuthLayout({
    children,
    title,
    description,
    ...props
}: {
    children: ReactNode;
    title: string;
    description: string;
}) {
    return (
        <SimpleLayout title={title} description={description} {...props}>
            {children}
        </SimpleLayout>
    );
}
