import CreateAnalisisDialog from "@/Components/Analisis/CreateAnalisisDialog";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head, Link } from "@inertiajs/react";

export default function Analisis({ auth, researches }) {
    return (
        <DashboardLayout user={auth.user} header="Analisis">
            <Head title="Analisis" />
            <main>
                <div className="bg-bw-white p-6 rounded-md">
                    <div className="flex">
                        Analisis yang sudah dilakukan:
                        <CreateAnalisisDialog />
                    </div>
                    {researches.map((research) => (
                        <div className="" key={research.id}>
                            {research.id} {research.title}
                            <Link href={route("analisis.show", research.id)}>
                                go
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </DashboardLayout>
    );
}
