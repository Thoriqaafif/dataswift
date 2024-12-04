import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Beranda({ auth }) {
    return (
        <DashboardLayout user={auth.user} header="Beranda">
            <Head title="Beranda" />
        </DashboardLayout>
    );
}
