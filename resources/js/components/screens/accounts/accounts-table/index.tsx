import type { TAccount } from '@/types/models';

import { columns } from './columns';

import { DataTable } from './data-table';

export const AccountsTable = ({ accounts }: { accounts: TAccount[] }) => {
    return (
        <div>
            <DataTable
                columns={columns}
                data={accounts}
                searchable={['name', 'plaid_id']}
                onDelete={(values) => {
                    console.log(values);
                }}
                disabled={false}
            />
        </div>
    );
};
