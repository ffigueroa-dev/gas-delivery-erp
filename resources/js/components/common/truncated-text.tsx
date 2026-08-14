import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

interface TruncatedTextProps {
    text: string;
    className?: string;
}

export function TruncatedText({
    text,
    className = '',
}: TruncatedTextProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <span
                    className={`block truncate ${className}`}
                >
                    {text}
                </span>
            </TooltipTrigger>

            <TooltipContent>
                <p className="max-w-xs wrap-break-word">
                    {text}
                </p>
            </TooltipContent>
        </Tooltip>
    );
}
