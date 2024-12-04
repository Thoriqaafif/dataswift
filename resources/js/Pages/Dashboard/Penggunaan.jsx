import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Penggunaan({ auth }) {
    return (
        <DashboardLayout user={auth.user} header="Penggunaan">
            <Head title="Penggunaan" />
        </DashboardLayout>
    );
}
