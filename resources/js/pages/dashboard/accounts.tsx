import type { TAccount } from '@/types/models';

import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { NewAccount } from '@/components/screens/accounts/new-account';

const Accounts = ({ accounts }: { accounts: TAccount[] }) => {
    console.log(accounts);

    return (
        <DashboardLayout title="Accounts" href="/dashboard/accounts">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div>
                    <NewAccount />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Accounts;
