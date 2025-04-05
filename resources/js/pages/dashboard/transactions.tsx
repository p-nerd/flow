import { Heading } from '@/components/elements/heading';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';

const Transactions = () => {
    return (
        <DashboardLayout title="Transactions" href="/dashboard/transactions">
            <div className="space-y-8 px-4 py-6">
                <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
                    <Heading
                        title="Transactions"
                        description="View and manage your recent financial transactions"
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Transactions;
