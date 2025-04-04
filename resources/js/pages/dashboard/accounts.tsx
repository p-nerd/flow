import type { TAccount } from '@/types/models';

import { Heading } from '@/components/elements/heading';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { AccountsTable } from '@/components/screens/accounts/accounts-table';
import { CreateAccount } from '@/components/screens/accounts/create-account';

const Accounts = ({ accounts }: { accounts: TAccount[] }) => {
    return (
        <DashboardLayout title="Accounts" href="/dashboard/accounts">
            <div className="space-y-8 px-4 py-6">
                <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
                    <Heading
                        title="Accounts"
                        description="View and manage all your financial accounts in one place"
                    />
                    <CreateAccount />
                </div>
                <AccountsTable accounts={accounts} />
            </div>
        </DashboardLayout>
    );
};

export default Accounts;
