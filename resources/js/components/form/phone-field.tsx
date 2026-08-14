import { Country } from 'react-phone-number-input';
import { PhoneInput } from '../reui/phone-input';
import { Field, FieldLabel } from '../ui/field';
import InputError from '../input-error';

type PhoneFieldProps = {
    id: string;
    label: string;
    value: string;
    error?: string;
    placeholder?: string;
    defaultCountry?: Country;
    onChange: (value: string) => void;
};

export const PhoneField = ({
    id,
    label,
    onChange,
    value,
    error,
    placeholder = 'Enter phone number',
    defaultCountry = 'AR',
}: PhoneFieldProps) => {
    return (
        <Field>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <PhoneInput
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                defaultCountry={defaultCountry}
                max={30}
                min={5}
            />
            <InputError message={error} />
        </Field>
    );
};
