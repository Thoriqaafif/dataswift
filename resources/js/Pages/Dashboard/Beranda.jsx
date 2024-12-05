import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <DashboardLayout user={auth.user} header="Beranda">
            <Head title="Beranda" />

            <main>
                <div className="p-6 bg-bw-white rounded-md text-3xl font-semibold">
                    Selamat Datang{" "}
                    <span className="text-primary-600">{auth.user.name}</span>
                </div>
            </main>
        </DashboardLayout>
    );
}
