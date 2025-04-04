import type { TCategory } from '@/types/models';

import { Heading } from '@/components/elements/heading';
import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { CategoriesTable } from '@/components/screens/categories/categories-table';
import { CreateCategory } from '@/components/screens/categories/create-category';

const Categories = ({ categories }: { categories: TCategory[] }) => {
    return (
        <DashboardLayout title="Categories" href="/dashboard/categories">
            <div className="space-y-8 px-4 py-6">
                <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">
                    <Heading
                        title="Categories"
                        description="View and manage all your transaction categories in one place"
                    />
                    <CreateCategory />
                </div>
                <CategoriesTable categories={categories} />
            </div>
        </DashboardLayout>
    );
};

export default Categories;
