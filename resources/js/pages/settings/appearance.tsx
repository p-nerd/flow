import type { BreadcrumbItem } from '@/types';

import { AppearanceTabs } from '@/components/elements/appearance-tabs';
import { HeadingSmall } from '@/components/elements/heading-small';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { SettingsLayout } from '@/components/layouts/settings-layout';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Appearance settings',
        href: '/settings/appearance',
    },
];

export default function Appearance() {
    return (
        <DashboardLayout breadcrumbs={breadcrumbs}>
            <Head title="Appearance settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Appearance settings"
                        description="Update your account's appearance settings"
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </DashboardLayout>
    );
}
