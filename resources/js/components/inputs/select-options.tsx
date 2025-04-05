import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import type { TOption } from '@/types';

import { InputWrapper } from './input-wrapper';

export const SelectOptions = ({
    label,
    name,
    value,
    error,
    onValue,
    placeholder,
    options,
    required,
    autoFocus,
}: {
    label: string;
    name: string;
    value: string;
    error?: string | null;
    onValue: (value: string) => void;
    placeholder?: string;
    options: TOption[];
    required?: boolean;
    autoFocus?: boolean;
}) => {
    return (
        <InputWrapper
            label={label}
            name={name}
            error={error}
            required={required}
            input={
                <Select name={name} value={value} onValueChange={onValue}>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent id={name} autoFocus={autoFocus}>
                        {options.map((option) => (
                            <SelectItem value={option.value}>{option.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            }
        />
    );
};
