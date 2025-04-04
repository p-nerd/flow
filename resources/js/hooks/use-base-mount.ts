import type { TSharedData } from '@/types';

import { usePage } from '@inertiajs/react';

// const useValidationErrorMount = () => {
//     const { errors } = usePage<TSharedData>().props;
//
//     useEffect(() => {
//         for (const error in errors) {
//             toast.error(errors[error]);
//         }
//     }, [errors]);
// };

const useReturnMessageMount = () => {
    const page = usePage<TSharedData>();

    console.log(page);
};

export const useBaseMount = () => {
    useReturnMessageMount();
};
