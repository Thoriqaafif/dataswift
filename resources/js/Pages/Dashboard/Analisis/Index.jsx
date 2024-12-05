import CreateAnalisisDialog from "@/Components/Analisis/CreateAnalisisDialog";
import TableData from "@/Components/Table/TableData";
import TableHeader from "@/Components/Table/TableHeader";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, router } from "@inertiajs/react";
import { MdDelete, MdLogin } from "react-icons/md";

export default function Analisis({ auth, researches }) {
    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus penelitian ini?")) {
            router.delete(`/analisis/${id}`, {
                onSuccess: () => {
                    alert("Penelitian telah dihapus.");
                },
                onError: () => {
                    alert("Penelitian gagal dihapus.");
                },
            });
        }
    };
    return (
        <DashboardLayout user={auth.user} header="Analisis">
            <Head title="Analisis" />
            <main>
                <div className="flex flex-col gap-4 bg-bw-white p-6 rounded-md">
                    <div className="flex items-centter justify-between">
                        Analisis yang sudah dilakukan:
                        <CreateAnalisisDialog />
                    </div>
                    <table className="w-full">
                        <TableHeader
                            columns={["ID", "Judul Penelitian", "Aksi"]}
                        />
                        <tbody>
                            {researches.map((research) => (
                                <tr key={research.id}>
                                    <TableData
                                        data={[
                                            research.id,
                                            research.title,
                                            <div className="flex justify-center gap-2">
                                                <Link
                                                    href={route(
                                                        "analisis.show",
                                                        research.id
                                                    )}
                                                    as="button"
                                                >
                                                    <MdLogin className="w-8 h-8 text-primary-600" />
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            research.id
                                                        )
                                                    }
                                                >
                                                    <MdDelete className="w-8 h-8 text-critical-600" />
                                                </button>
                                            </div>,
                                        ]}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </DashboardLayout>
    );
}
