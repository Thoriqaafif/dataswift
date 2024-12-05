import Select from "@/Components/Select";
import { useForm } from "@inertiajs/react";
import { useEffect, useMemo } from "react";

export default function ColumnPicker({ index, columns, setColumnPicker }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        column1: "",
        column2: "",
    });

    const columns2 = useMemo(
        () => columns.filter((column) => column !== data.column1),
        [data.column1]
    );

    useEffect(() => {
        if (!!data.column1 || !!data.column2) {
            setColumnPicker(index, [data.column1, data.column2]);
        }
    }, [data.column1, data.column2]);

    return (
        <div className="flex flex-col gap-2">
            <Select
                placeholder="Kolom 1"
                label="Kolom 1"
                className="w-fit"
                onChange={(e) => setData("column1", e.target.value)}
            >
                {columns.map((column) => (
                    <option key={column}>{column}</option>
                ))}
            </Select>
            <Select
                placeholder="Kolom 2"
                label="Kolom 2"
                className="w-fit"
                onChange={(e) => setData("column2", e.target.value)}
                disabled={!!!data.column1}
            >
                {columns2.map((column) => (
                    <option key={column}>{column}</option>
                ))}
            </Select>
        </div>
    );
}
