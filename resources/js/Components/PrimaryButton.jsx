import { cn } from "@/Lib/utils";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={cn(
                "flex justify-center items-center bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-sm text-bw-white font-semibold",
                disabled && "opacity-50",
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
