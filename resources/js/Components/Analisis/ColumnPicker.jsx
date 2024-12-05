import Select from "@/Components/Select";
import { useEffect, useState } from "react";

export default function ColumnPicker({ index, columns, setColumnPicker }) {
    const [column, setColumn] = useState();

    useEffect(() => {
        if (!!column) {
            setColumnPicker(index, column);
        }
    }, [column]);

    return (
        <div className="flex flex-col gap-2">
            <Select
                placeholder="Kolom"
                label="Kolom"
                className="w-fit"
                onChange={(e) => setColumn(e.target.value)}
            >
                {columns.map((column) => (
                    <option key={column}>{column}</option>
                ))}
            </Select>
        </div>
    );
}
