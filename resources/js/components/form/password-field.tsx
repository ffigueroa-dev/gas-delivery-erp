import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Field, FieldLabel } from '@/components/ui/field';

interface PasswordFieldProps {
    id: string;
    label: string;
    value: string;
    error?: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export function PasswordField({
    id,
    label,
    value,
    error,
    placeholder,
    onChange,
}: PasswordFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={id}>
                {label}
            </FieldLabel>

            <PasswordInput
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                aria-invalid={!!error}
            />

            <InputError message={error} />
        </Field>
    );
}
