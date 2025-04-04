import type { TSharedData } from '@/types';

import { formatUTCToLocalTime } from '@/lib/time';
import { toast } from '@/lib/toast';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

// const useValidationErrorMount = () => {
//     const { errors } = usePage<TSharedData>().props;
//
//     useEffect(() => {
//         for (const error in errors) {
//             toast.error(errors[error]);
//         }
//     }, [errors]);
// };

const useFlashMessageMount = () => {
    const { success, error, moment } = usePage<TSharedData>().props.flash;

    useEffect(() => toast.success(success, formatUTCToLocalTime(moment)), [success, moment]);
    useEffect(() => toast.error(error, formatUTCToLocalTime(moment)), [error, moment]);
};

export const useBaseMount = () => {
    useFlashMessageMount();
};
