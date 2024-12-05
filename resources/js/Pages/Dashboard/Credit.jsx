import { Head, Link, router } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { useState } from 'react';

export default function Credit({ auth, packages }) { // Terima 'packages' sebagai props
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handlePurchase = (pkg) => {
        setSelectedPackage(pkg);
    };

    const confirmPurchase = () => {
        if (!selectedPackage) return;

        setProcessing(true);

        router.post(route('credit.purchase'), {
            package_id: selectedPackage.id,
        }, {
            onFinish: () => setProcessing(false),
            onSuccess: () => {
                alert('Pembelian kredit berhasil!');
            },
            onError: () => {
                alert('Pembelian kredit gagal.');
            },
        });
    };

    return (
        <DashboardLayout user={auth.user} header="Pembelian Kredit">
            <Head title="Pembelian Kredit" />
            <main className="flex flex-col items-center justify-center p-6">
                <div className="flex flex-col justify-center items-center w-full h-auto bg-white p-10 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-6">Paket dan Harga</h2>
                    <div className="flex flex-row justify-center items-center gap-10 w-full">
                        {packages.map((pkg) => (
                            <div key={pkg.id} className="flex flex-col justify-start items-start gap-4 w-80 p-6 border border-blue-500 rounded-lg">
                                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                                <p className="text-xl">{pkg.price}</p>
                                <p className="text-lg">+{pkg.credit} kredit per hari</p>
                                <button
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    onClick={() => handlePurchase(pkg)}
                                >
                                    Beli Kredit
                                </button>
                            </div>
                        ))}
                    </div>
                    {selectedPackage && (
                        <div className="mt-8 flex flex-col items-center">
                            <h4 className="text-xl">Anda memilih paket: {selectedPackage.name}</h4>
                            <button
                                className="mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
                                onClick={confirmPurchase}
                                disabled={processing}
                            >
                                {processing ? 'Memproses...' : 'Konfirmasi Pembelian'}
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </DashboardLayout>
    );
}