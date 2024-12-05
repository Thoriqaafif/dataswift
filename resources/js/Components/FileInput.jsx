import { cn } from "@/Lib/utils";
import { useRef } from "react";
import {
    MdDeleteOutline,
    MdInsertDriveFile,
    MdOutlineFileUpload,
} from "react-icons/md";

export default function FileInput({
    accept = ".csv, .xlsx",
    id,
    name,
    label,
    errors,
    file = null,
    setFile = () => {},
}) {
    const fileInputRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        fileInputRef.current?.click();
    };

    const handleRemove = (e) => {
        e.preventDefault();
        setFile(null);
    };

    const updateFile = (e) => {
        if (e.target.files.length) {
            setFile(e.target.files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-4">
                {label && (
                    <label className={cn("text-xl font-semibold")} htmlFor="id">
                        {label}
                    </label>
                )}
                {file ? (
                    <div
                        className="flex justify-between items-center text-bw-primary p-4 rounded-lg ring-1 ring-inset ring-bw-icon"
                        title={file.name}
                    >
                        <div className="flex gap-3 items-center">
                            <MdInsertDriveFile className="w-9 h-9" />
                            <div className="flex flex-col text-secondary-500">
                                <span className="font-semibold truncate max-w-24">
                                    {file.name}
                                </span>
                                <span className="text-sm">
                                    {file.size} bytes
                                </span>
                            </div>
                        </div>
                        <button onClick={handleRemove} title="Remove">
                            <MdDeleteOutline className="w-8 h-8" />
                        </button>
                    </div>
                ) : (
                    <div>
                        <input
                            id={id}
                            name={name}
                            ref={fileInputRef}
                            type="file"
                            accept={accept}
                            className="hidden"
                            onChange={updateFile}
                        />
                        <button
                            className={cn(
                                "border-none appearance-none",
                                "px-5 py-3 flex flex-row gap-2  rounded-md",
                                "ring-1 ring-inset ring-bw-icon",
                                "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-600 text-bw-icon"
                            )}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            onClick={handleClick}
                        >
                            <MdOutlineFileUpload className="w-6 h-6" />
                            <span>Klik untuk unggah</span>
                        </button>
                    </div>
                )}
            </div>
            {errors && <p className={cn("text-sm text-red-400")}>{errors}</p>}
        </div>
    );
}
