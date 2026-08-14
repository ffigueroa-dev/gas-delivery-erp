import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Field, FieldLabel } from '../ui/field';
import { SelectOption } from '@/types/common';
import InputError from '../input-error';

type SelectFieldProps<T extends string> = {
    id: string;
    label: string;
    selectLabel: string;
    value: T;
    error?: string;
    placeholder: string;
    onChange: (value: T) => void;
    dropdown: SelectOption<T>[];
};

export function SelectField<T extends string>({
    dropdown,
    id,
    label,
    onChange,
    placeholder,
    selectLabel,
    value,
    error,
}: SelectFieldProps<T>) {
    return (
        <Field>
            <FieldLabel htmlFor={id}>
                {label}
            </FieldLabel>

            <Select
                value={value}
                onValueChange={(value) => onChange(value as T)}
            >
                <SelectTrigger
                    id={id}
                    className="w-full"
                    aria-invalid={!!error}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>
                            {selectLabel}
                        </SelectLabel>

                        {dropdown.map((option) => (
                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <InputError message={error} />
        </Field>
    );
}
