import { cn } from "@/Lib/utils";

export default function Input({
    className,
    id,
    name,
    label,
    placeholder,
    type = "text",
    errors,
    ...rest
}) {
    return (
        <div className="flex flex-col relative">
            <div className="flex flex-col gap-4">
                {label && (
                    <label className={cn("text-xl font-semibold")} htmlFor="id">
                        {label}
                    </label>
                )}
                <input
                    className={cn(
                        "border-none appearance-none",
                        "px-5 py-3 rounded-md",
                        "ring-1 ring-inset ring-bw-icon",
                        "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-600",
                        "placeholder:text-bw-icon",
                        className
                    )}
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
            {errors && <p className={cn("text-sm text-red-400")}>{errors}</p>}
        </div>
    );
}
