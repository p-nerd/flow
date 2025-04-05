export type TUser = {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
};

export type TAccount = {
    id: string;
    user_id: string;
    name: string;
    plaid_id: string | null;
    created_at: string;
    updated_at: string;
};

export type TCategory = {
    id: string;
    user_id: string;
    name: string;
    plaid_id: string | null;
    created_at: string;
    updated_at: string;
};

export type TTransaction = {
    id: string;
    account_id: string;
    category_id: string;
    amount: number;
    payee: string;
    notes: string;
    transaction_at: string;
    created_at: string;
    updated_at: string;
};
