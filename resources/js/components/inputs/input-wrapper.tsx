import type { ReactNode } from 'react';

import { Message } from '@/components/elements/message';
import { Label } from '@/components/ui/label';

export const InputWrapper = ({
    label,
    name,
    error,
    required,
    input,
}: {
    label: string;
    name: string;
    error?: string | null;
    required?: boolean;
    input?: ReactNode;
}) => {
    return (
        <div className="space-y-1">
            <div className="flex items-center space-x-0.5">
                <Label htmlFor={name}>{label}</Label>{' '}
                {required && <div className="text-primary">*</div>}
            </div>
            <div>{input}</div>
            <div>
                <Message error={error} />
            </div>
        </div>
    );
};
