import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import type { TOption } from '@/types';

import { Message } from '@/components/elements/message';
import { Label } from '@/components/ui/label';

export const SelectOptions = ({
    label,
    name,
    value,
    error,
    onValue,
    placeholder,
    options,
}: {
    label: string;
    name: string;
    value: string;
    error?: string | null;
    onValue: (value: string) => void;
    placeholder?: string;
    options: TOption[];
}) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={name}>{label}</Label>
            <Select name={name} value={value} onValueChange={onValue}>
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent id={name}>
                    {options.map((option) => (
                        <SelectItem value={option.value}>{option.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Message error={error} />
        </div>
    );
};
