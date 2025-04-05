import { cn } from '@/lib/utils';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { InputWrapper } from './input-wrapper';

export const DatePicker = ({
    label,
    name,
    error,
    required,
    value,
    onValue,
    placeholder,
}: {
    label: string;
    name: string;
    error?: string | null;
    required?: boolean;
    value: string;
    onValue: (value: string) => void;
    placeholder?: string;
}) => {
    return (
        <InputWrapper
            label={label}
            name={name}
            error={error}
            required={required}
            input={
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={'outline'}
                            className={cn(
                                'w-full justify-start text-left font-normal',
                                !value && 'text-muted-foreground',
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {value ? (
                                format(value, 'PPP')
                            ) : (
                                <span>{placeholder || 'Pick a date'}</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Calendar
                            mode="single"
                            selected={new Date(value)}
                            onSelect={(val) => onValue(val?.toISOString() || '')}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            }
        />
    );
};
