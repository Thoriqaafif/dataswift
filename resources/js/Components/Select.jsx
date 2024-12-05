import { cn } from "@/Lib/utils";

export default function Select({
    className,
    id,
    name,
    label,
    placeholder,
    options,
    errors,
    children,
    ...rest
}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-1">
                {label && (
                    <label
                        className={cn("text-sm font-medium text-secondary-500")}
                        htmlFor="id"
                    >
                        {label}
                    </label>
                )}

                <select
                    className={cn(
                        "border-none appearance-none",
                        "px-5 py-3 rounded-lg",
                        "ring-1 ring-inset ring-bw-icon",
                        "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-600",
                        "text-bw-primary",
                        className
                    )}
                    id={id}
                    defaultValue=""
                    {...rest}
                >
                    {placeholder && (
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </select>
            </div>
            {errors && <p className={cn("text-sm text-red-400")}>{errors}</p>}
        </div>
    );
}
