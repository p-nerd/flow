import type { ReactNode } from 'react';

import { BaseLayout } from '../base-layout';
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
        <BaseLayout>
            <SimpleLayout title={title} description={description} {...props}>
                {children}
            </SimpleLayout>
        </BaseLayout>
    );
}
