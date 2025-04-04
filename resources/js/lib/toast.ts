import { toast as sonner } from 'sonner';

export const toast = {
    success: (message: string | null, description?: string | null) => {
        if (!message) return;

        sonner.success(message, {
            description,
            action: {
                label: 'Hide',
                onClick: () => {},
            },
        });
    },
    error: (message: string | null, description?: string | null) => {
        if (!message) return;

        sonner.error(message, {
            description,
            action: {
                label: 'Hide',
                onClick: () => {},
            },
        });
    },
};
