import CreateAnalisisDialog from "@/Components/Analisis/CreateAnalisisDialog";
import TableData from "@/Components/Table/TableData";
import TableHeader from "@/Components/Table/TableHeader";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link, router } from "@inertiajs/react";
import { MdChat, MdDelete, MdLogin } from "react-icons/md";

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
                    <span>Analisis yang sudah dilakukan:</span>
                        {auth.user.credit >= 10 ? (
                            <CreateAnalisisDialog user={auth.user} />
                        ) : (
                            <div className="flex flex-col items-end">
                                <p className="text-red-500 mb-2">
                                    Kredit Anda di bawah 10, tidak dapat menambah penelitian.
                                </p>
                                <Link href={route('credit.index')} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    Tambah Kredit
                                </Link>
                            </div>
                        )}
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
                                                <Link
                                                    href={route(
                                                        "analisis.chat",
                                                        research.id
                                                    )}
                                                    as="button"
                                                >
                                                    <MdChat className="w-8 h-8 text-primary-600" />
                                                </Link>
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
