import type { TAccount } from '@/types/models';

import { columns } from './columns';

import { DataTable } from './data-table';

export const AccountsTable = ({ accounts }: { accounts: TAccount[] }) => {
    return (
        <div>
            <DataTable columns={columns} data={accounts} />
        </div>
    );
};
