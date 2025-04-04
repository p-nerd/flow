import { AppearanceTabs } from '@/components/elements/appearance-tabs';
import { HeadingSmall } from '@/components/elements/heading-small';
import { SettingsLayout } from '@/components/layouts/settings-layout';

export default function Appearance() {
    return (
        <SettingsLayout title="Appearance settings" href="/settings/appearance">
            <div className="space-y-6">
                <HeadingSmall
                    title="Appearance settings"
                    description="Update your account's appearance settings"
                />
                <AppearanceTabs />
            </div>
        </SettingsLayout>
    );
}
