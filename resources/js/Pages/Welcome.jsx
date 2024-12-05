import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <div className="relative flex flex-col justify-start items-start w-full h-auto box-border bg-[rgba(249,250,251,1)]">
            <Head title="Dataswift" />
            <div className="absolute flex flex-row justify-between items-center gap-[319px] w-full h-20 px-20 py-5 box-border bg-[rgba(255,255,255,1)] shadow-[0px_2px_4px_0px_rgba(65,78,98,0.12)] shadow-[0px_0px_1px_0px_rgba(65,78,98,0.05)]">
                <div className="flex flex-row justify-center items-center gap-1.5 h-[undefinedundefined] box-border">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jznmuab1gqb-251%3A11457?alt=media&token=63817621-2a20-4fce-9015-b35dd3def1a0"
                        alt="Not Found"
                        className="w-[29px] h-[100%]"
                    />
                    <p className="border-[#212121ff] text-3xl leading-[30px] font-basic font-[400]">
                        Dataswift
                    </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 h-[100%] box-border">
                    {auth.user ? (
                        <>
                            <Link
                                href={route("beranda")}
                                className="flex flex-row justify-center items-center gap-2 h-[100%] px-4 py-2 rounded box-border bg-[rgba(84,167,232,1)]"
                            >
                                <p className="flex flex-col justify-center border-[#ffffffff] text-base leading-[150%] font-inter font-[600] text-center">
                                    Dashboard
                                </p>
                            </Link>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="flex flex-row justify-center items-center gap-2 h-[100%] px-4 py-2 rounded box-border"
                            >
                                <p className="flex flex-col justify-center border-[#687083ff] text-base leading-[150%] font-inter font-[600] text-center">
                                    Keluar
                                </p>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="flex flex-row justify-center items-center gap-2 h-[100%] px-4 py-2 rounded box-border"
                            >
                                <p className="flex flex-col justify-center border-[#687083ff] text-base leading-[150%] font-inter font-[600] text-center">
                                    Log in
                                </p>
                            </Link>
                            <Link
                                href="/register"
                                className="flex flex-row justify-center items-center gap-2 h-[100%] px-4 py-2 rounded box-border"
                            >
                                <p className="flex flex-col justify-center border-[#687083ff] text-base leading-[150%] font-inter font-[600] text-center">
                                    Register
                                </p>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Judul dan Deskripsi */}
            <div className="flex flex-col justify-center items-center w-[100%] px-20 pt-40 pb-20 box-border">
                <div className="flex flex-col justify-start items-center gap-8 w-[100%] h-[100%] box-border">
                    <div className="flex flex-col justify-start items-center gap-2 w-[undefinedundefined] box-border">
                        <p className="flex flex-col justify-center border-[#212121ff] text-5xl leading-[117%] font-inter font-[700] text-center">
                            Analisis Data Penelitian
                        </p>
                        <p className="flex flex-col justify-center border-[#54a7e8ff] text-5xl leading-[117%] font-inter font-[700] text-center">
                            Menjadi Lebih Mudah
                        </p>
                        <p className="flex flex-col justify-center border-[#687083ff] text-xl leading-[140%] font-inter font-[500] text-center">
                            Platform visualisasi, analisis, dan penyimpanan data
                            penelitian Anda.
                        </p>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2 w-[undefinedundefined] px-4 py-2 rounded box-border bg-[rgba(84,167,232,1)]">
                        <p className="flex flex-col justify-center border-[#ffffffff] text-base leading-[150%] font-inter font-[600] text-center">
                            Coba Gratis
                        </p>
                    </div>
                </div>
            </div>

            {/* Visualisasi Data */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[480px] px-20 box-border bg-[rgba(255,255,255,1)]">
                <div className="flex flex-row justify-between items-center gap-[55px] w-[undefinedundefined] box-border">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jznmuab1gqb-251%3A10301?alt=media&token=d9c3f18b-a870-4ded-aee4-5ab9a037db3f"
                        alt="Not Found"
                        className="w-[400px] h-[100%]"
                    />
                    <div className="flex flex-col justify-start items-start gap-4 w-[560px] h-[undefinedundefined] box-border">
                        <div className="flex flex-row justify-start items-center gap-3 w-[100%] box-border">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jznmuab1gqb-251%3A10537?alt=media&token=e0d74a2b-c5ba-408b-a742-d3670a303c2f"
                                alt="Not Found"
                                className="w-10 h-[100%]"
                            />
                            <p className="border-[#212121ff] text-[32px] leading-[125%] font-inter font-[700]">
                                Visualisasi Data
                            </p>
                        </div>
                        <p className="border-[#687083ff] text-xl leading-[140%] font-inter font-[500]">
                            Transformasikan data penelitian Anda menjadi
                            visualisasi yang menarik dan informatif melalui
                            grafik dan tabel interaktif. Nikmati kemudahan
                            integrasi dengan Google Sheets untuk pengolahan data
                            secara real-time.
                        </p>
                    </div>
                </div>
            </div>

            {/* Penyimpanan Cloud */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[480px] px-20 box-border">
                <div className="flex flex-row justify-between items-center gap-[104px] w-[undefinedundefined] box-border">
                    <div className="flex flex-col justify-start items-start gap-4 w-[560px] h-[undefinedundefined] box-border">
                        <div className="flex flex-row justify-start items-center gap-3 w-[100%] box-border">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jznmuab1gqb-251%3A10544?alt=media&token=e10ec6ad-d1f7-4be1-bb59-c419d166f721"
                                alt="Not Found"
                                className="w-10 h-[100%]"
                            />
                            <p className="border-[#212121ff] text-[32px] leading-[125%] font-inter font-[700]">
                                Penyimpanan Cloud
                            </p>
                        </div>
                        <p className="border-[#687083ff] text-xl leading-[140%] font-inter font-[500]">
                            Simpan dan akses data penelitian Anda dari mana saja
                            dengan penyimpanan cloud yang aman.
                        </p>
                    </div>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jznmuab1gqb-251%3A10547?alt=media&token=52a7cc8e-e3fa-44c5-8109-2401883f85af"
                        alt="Not Found"
                        className="w-[400px] h-[100%]"
                    />
                </div>
            </div>

            {/* Paket dan Harga */}
            <div className="flex flex-col justify-center items-center w-[100%] h-[560px] box-border bg-[rgba(255,255,255,1)]">
                <div className="flex flex-col justify-start items-center gap-10 w-[undefinedundefined] box-border">
                    <p className="flex flex-col justify-center border-[#212121ff] text-[32px] leading-[125%] font-inter font-[700] text-center">
                        Paket dan Harga
                    </p>
                    <div className="flex flex-row justify-start items-center gap-10 w-[100%] box-border">
                        <div className="flex flex-col justify-start items-start gap-2 w-80 h-[100%] p-[22px] border border-[#54a7e8ff] border-solid rounded-lg box-border bg-[rgba(255,255,255,1)]">
                            <div className="flex flex-col justify-start items-start gap-4 w-[100%] h-[100%] box-border">
                                <div className="flex flex-col justify-start items-start gap-2 w-[100%] box-border">
                                    <p className="border-[#212121ff] text-2xl leading-[133%] font-inter font-[700]">
                                        Bulanan
                                    </p>
                                    <p className="border-[#212121ff] text-2xl leading-[133%] font-inter font-[400]">
                                        IDR 69.900,-
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2 w-[100%] box-border">
                                    <p className="border-[#212121ff] text-xl leading-[140%] font-inter font-[600]">
                                        Fitur
                                    </p>
                                    <p className="border-[#687083ff] text-xl leading-[140%] font-inter font-[400]">
                                        +300 kredit per hari Kolaborasi
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 w-80 h-[100%] p-[22px] border border-[#54a7e8ff] border-solid rounded-lg box-border bg-[rgba(255,255,255,1)]">
                            <div className="flex flex-col justify-start items-start gap-4 w-[100%] h-[100%] box-border">
                                <div className="flex flex-col justify-start items-start gap-2 w-[100%] box-border">
                                    <p className="border-[#212121ff] text-2xl leading-[133%] font-inter font-[700]">
                                        Tahunan
                                    </p>
                                    <p className="border-[#212121ff] text-2xl leading-[133%] font-inter font-[400]">
                                        IDR 799.900,-
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-start gap-2 w-[100%] box-border">
                                    <p className="border-[#212121ff] text-xl leading-[140%] font-inter font-[600]">
                                        Fitur
                                    </p>
                                    <p className="border-[#687083ff] text-xl leading-[140%] font-inter font-[400]">
                                        +600 kredit per hari Kolaborasi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-center gap-[15px] w-[undefinedundefined] box-border">
                        <p className="border-[#000000ff] text-xl leading-[140%] font-inter font-[400]">
                            Or
                        </p>
                        <div className="flex flex-row justify-center items-center gap-2 w-[100%] px-4 py-2 rounded box-border bg-[rgba(84,167,232,1)]">
                            <p className="flex flex-col justify-center border-[#ffffffff] text-base leading-[150%] font-inter font-[600] text-center">
                                Uji Coba Gratis 7 Hari
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-row justify-between items-center w-[100%] px-20 py-6 box-border">
                <div className="flex flex-row justify-center items-center gap-1.5 h-[undefinedundefined] box-border">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jznmuab1gqb-251%3A11409?alt=media&token=779bf11a-aa38-4b42-b846-02148b9e4b27"
                        alt="Not Found"
                        className="w-[29px] h-[100%]"
                    />
                    <p className="border-[#212121ff] text-3xl leading-[30px] font-basic font-[400]">
                        Dataswift
                    </p>
                </div>
                <p className="border-[#687083ff] text-xl leading-[140%] font-inter font-[700]">
                    © 2024
                </p>
            </div>
        </div>
    );
}
