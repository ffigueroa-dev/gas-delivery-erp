import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import InputError from "../input-error";

type TextFieldProps = {
    id: string;
    label: string;
    value: string;
    error?: string;
    placeholder?: string;
    type?: string;
    min?: string | number;
    onChange: (value: string) => void;
};

export function TextField({
    id,
    label,
    value,
    error,
    placeholder,
    type = "text",
    min,
    onChange,
}: TextFieldProps) {
    return (
        <Field>
            <FieldLabel htmlFor={id}>
                {label}
            </FieldLabel>

            <Input
                id={id}
                type={type}
                min={min}
                value={value}
                placeholder={placeholder}
                aria-invalid={!!error}
                onChange={(e) => onChange(e.target.value)}
            />

            <InputError message={error} />
        </Field>
    );
}
