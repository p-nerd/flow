import { type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Message({
    error,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & { error?: string | null }) {
    return error ? (
        <p {...props} className={cn('text-sm text-red-600 dark:text-red-400', className)}>
            {error}
        </p>
    ) : null;
}
