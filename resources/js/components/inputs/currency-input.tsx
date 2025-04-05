import { cn } from '@/lib/utils';

import { InputWrapper } from './input-wrapper';

import CurrencyField from 'react-currency-input-field';

export const CurrencyInput = ({
    label,
    name,
    value,
    error,
    onValue,
    placeholder,
    required,
    autoFocus,
    className,
}: {
    label: string;
    name: string;
    value?: number;
    error?: string | null;
    onValue: (value: number) => void;
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    className?: string;
}) => {
    return (
        <InputWrapper
            label={label}
            name={name}
            error={error}
            required={required}
            input={
                <CurrencyField
                    id={name}
                    name={name}
                    required={required}
                    autoFocus={autoFocus}
                    autoComplete={name}
                    placeholder={placeholder}
                    value={value}
                    onValueChange={(value, name, values) => {
                        console.log(value, name, values);
                        if (value) {
                            onValue(Number(value));
                        }
                    }}
                    decimalsLimit={2}
                    className={cn(
                        'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
                        className,
                    )}
                />
            }
        />
    );
};
