import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Eksplor({ auth }) {
    return (
        <DashboardLayout user={auth.user} header="Eksplor">
            <Head title="Eksplor" />
        </DashboardLayout>
    );
}
