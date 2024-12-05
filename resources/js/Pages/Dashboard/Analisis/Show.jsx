import ColumnPicker from "@/Components/Analisis/ColumnPicker";
import PrimaryButton from "@/Components/PrimaryButton";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { PieChart } from "recharts";

// MASIH IN PROGRESS

const computeCounts = (data, column) => {
    const counts = data.reduce((acc, curr) => {
        acc[curr[column]] = (acc[curr[column]] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(counts).map(([category, count]) => ({
        category,
        count,
    }));
};

const calculatePercentages = (data) => {
    const total = data.reduce((sum, item) => sum + item.count, 0);
    return data.map((item) => ({
        ...item,
        percentage: ((item.count / total) * 100).toFixed(2), // Percentage rounded to 2 decimal places
    }));
};

const prosesCategoricalData = (data, column) => {};

export default function Show({ auth, research }) {
    const [columnPickers, setColumnPickers] = useState([
        { index: 0, columns: [] },
    ]);

    const addColumnPicker = () => {
        setColumnPickers((prev) => [
            ...prev,
            { index: columnPickers.length, columns: [] },
        ]);
    };

    const setColumns = (index, columns) => {
        setColumnPickers((prev) => {
            const newColumnPickers = [...prev];
            newColumnPickers[index].columns = columns;
            return newColumnPickers;
        });
    };
    const data = calculatePercentages(computeCounts(research.data, "Nama"));
    console.log(data);

    return (
        <DashboardLayout user={auth.user} header={research.title}>
            <Head title={research.title} />
            <main className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 bg-bw-white p-6 rounded-md">
                    {columnPickers.map((columnPicker) => (
                        <ColumnPicker
                            key={columnPicker.index}
                            columns={research.columns}
                            index={columnPicker.index}
                            setColumnPicker={setColumns}
                        />
                    ))}
                    <PrimaryButton onClick={addColumnPicker}>
                        <MdAdd />
                    </PrimaryButton>
                </div>

                <div className="flex flex-col gap-4 bg-bw-white p-6 rounded-md">
                    {columnPickers.map((columnPicker) => (
                        <div key={columnPicker.index}>{columnPicker.index}</div>
                    ))}
                    <PieChart width={400} height={400}></PieChart>
                </div>
            </main>
        </DashboardLayout>
    );
}
