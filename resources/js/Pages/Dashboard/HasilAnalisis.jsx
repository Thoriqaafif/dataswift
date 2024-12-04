import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function HasilAnalisis({ auth }) {
    return (
        <DashboardLayout user={auth.user} header="Hasil Analisis">
            <Head title="Hasil Analisis" />
        </DashboardLayout>
    );
}
