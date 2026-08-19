import { Field, FieldLabel } from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';
import InputError from '@/components/input-error';

type SwitchFieldProps = {
    id: string;
    label: string;
    description?: string;
    checked: boolean;
    error?: string;
    onChange: (checked: boolean) => void;
};

export function SwitchField({
    id,
    label,
    description,
    checked,
    error,
    onChange,
}: SwitchFieldProps) {
    return (
        <Field>
            <div className="flex items-center justify-between gap-4 rounded-lg border p-4">
                <div className="space-y-1">
                    <FieldLabel htmlFor={id}>
                        {label}
                    </FieldLabel>

                    {description && (
                        <p className="text-sm text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>

                <Switch
                    id={id}
                    checked={checked}
                    onCheckedChange={onChange}
                />
            </div>

            <InputError message={error} />
        </Field>
    );
}
