import ColumnPicker from "@/Components/Analisis/ColumnPicker";
import PrimaryButton from "@/Components/PrimaryButton";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Pie,
    PieChart,
    Rectangle,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const countValues = (data, column) => {
    const counts = data.reduce((acc, curr) => {
        acc[curr[column]] = (acc[curr[column]] || 0) + 1;
        return acc;
    }, {});

    const dataCounts = Object.entries(counts).map(([category, count]) => ({
        [column]: category,
        count,
    }));

    return dataCounts;
};
const computePercentage = (data, column) => {
    const total = data.reduce((sum, item) => sum + item.count, 0);
    return data.map((item) => ({
        [column]: item[column],
        value: Number((item.count / total) * 100), // Percentage rounded to 2 decimal places
    }));
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function Show({ auth, research }) {
    const [columnPickers, setColumnPickers] = useState([
        { index: 0, column: undefined },
    ]);

    const addColumnPicker = () => {
        setColumnPickers((prev) => [
            ...prev,
            { index: columnPickers.length, column: undefined },
        ]);
    };

    const setColumns = (index, column) => {
        setColumnPickers((prev) => {
            const newColumnPickers = [...prev];
            newColumnPickers[index].column = column;
            return newColumnPickers;
        });
    };

    const removeColumn = (index) => {
        setColumnPickers((prev) => {
            const newColumnPickers = prev.filter(
                (columnPicker) => index !== columnPicker.index
            );
            return newColumnPickers;
        });
    };

    return (
        <DashboardLayout
            user={auth.user}
            header={`Hasil Analisis ${research.title}`}
        >
            <Head title={research.title} />
            <main className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 bg-bw-white p-6 rounded-md">
                    {columnPickers.map((columnPicker, index) => (
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center font-semibold text-xl ">
                                <button
                                    onClick={() =>
                                        removeColumn(columnPicker.index)
                                    }
                                >
                                    <MdDelete />
                                </button>
                                Grafik {index + 1}
                            </div>

                            <ColumnPicker
                                key={columnPicker.index}
                                columns={research.columns}
                                index={columnPicker.index}
                                setColumnPicker={setColumns}
                            />
                        </div>
                    ))}
                    <PrimaryButton onClick={addColumnPicker}>
                        <MdAdd />
                    </PrimaryButton>
                </div>

                {columnPickers.some((columnPicker) => columnPicker.column) && (
                    <div className="flex flex-col gap-4 bg-bw-white p-6 rounded-md">
                        {columnPickers.map(
                            (columnPicker) =>
                                columnPicker.column && (
                                    <div
                                        key={columnPicker.index}
                                        className="flex flex-col"
                                    >
                                        <span className="text-xl font-semibold">
                                            {columnPicker.column}
                                        </span>
                                        <div className="grid grid-cols-2">
                                            <PieChart width={300} height={300}>
                                                <Pie
                                                    dataKey="value"
                                                    nameKey={
                                                        columnPicker.column
                                                    }
                                                    data={computePercentage(
                                                        countValues(
                                                            research.data,
                                                            columnPicker.column
                                                        ),
                                                        columnPicker.column
                                                    )}
                                                    isAnimationActive={false}
                                                    labelLine={false}
                                                    label={
                                                        renderCustomizedLabel
                                                    }
                                                    outerRadius={80}
                                                    fill="#8AB364"
                                                />
                                                <Tooltip />
                                            </PieChart>

                                            <BarChart
                                                width={500}
                                                height={300}
                                                data={countValues(
                                                    research.data,
                                                    columnPicker.column
                                                )}
                                            >
                                                <CartesianGrid strokeDasharray="1 1" />
                                                <XAxis
                                                    dataKey={
                                                        columnPicker.column
                                                    }
                                                />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Bar
                                                    dataKey="count"
                                                    fill="#8884d8"
                                                    activeBar={
                                                        <Rectangle
                                                            fill="pink"
                                                            stroke="blue"
                                                        />
                                                    }
                                                />
                                            </BarChart>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                )}
            </main>
        </DashboardLayout>
    );
}
