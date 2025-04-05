import { Input } from '@/components/ui/input';
import { InputWrapper } from './input-wrapper';

export const TextInput = ({
    label,
    name,
    value,
    error,
    onValue,
    placeholder,
    required,
    autoFocus,
}: {
    label: string;
    name: string;
    value: string;
    error?: string | null;
    onValue: (value: string) => void;
    placeholder?: string;
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
                <Input
                    id={name}
                    name={name}
                    required={required}
                    autoFocus={autoFocus}
                    autoComplete={name}
                    value={value}
                    onChange={(e) => onValue(e.target.value)}
                    placeholder={placeholder}
                />
            }
        />
    );
};
