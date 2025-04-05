import { Textarea } from '@/components/ui/textarea';
import { InputWrapper } from './input-wrapper';

export const TextareaInput = ({
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
                <Textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onValue(e.target.value)}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    autoComplete={name}
                    required={required}
                />
            }
        />
    );
};
