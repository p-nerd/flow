import type { TTransaction } from '@/types/models';

import { Heading } from '@/components/elements/heading';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { CreateTranaction } from '@/components/screens/transactions/create-transaction';
import { TransactionsTable } from '@/components/screens/transactions/transactions-table';
import { TOption } from '@/types';

const Transactions = ({
    transactions,
    accounts,
    categories,
}: {
    transactions: TTransaction[];
    accounts: TOption[];
    categories: TOption[];
}) => {
    return (
        <DashboardLayout title="Transactions" href="/dashboard/transactions">
            <div className="space-y-8 px-4 py-6">
                <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
                    <Heading
                        title="Transactions"
                        description="View and manage your recent financial transactions"
                    />
                    <CreateTranaction accounts={accounts} categories={categories} />
                </div>
                <TransactionsTable transactions={transactions} />
            </div>
        </DashboardLayout>
    );
};

export default Transactions;
