import Input from "@/Components/Input";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Head title="Daftar" />

            <form
                onSubmit={submit}
                className="w-full flex flex-col gap-6 max-w-xl"
            >
                <div className="flex flex-row justify-center items-center gap-1.5">
                    <img src="images/logo.svg" alt="Logo" />
                    <p className="border-bw-primary text-3xl font-basic">
                        Dataswift
                    </p>
                </div>
                <span className="text-3xl font-bold">Daftar</span>
                <div className="flex flex-col gap-4">
                    <Input
                        id="name"
                        name="name"
                        label="Nama"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        errors={errors.name}
                    />
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Alamat Email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        errors={errors.email}
                    />

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        label="Password"
                        placeholder={"Password"}
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        errors={errors.password}
                    />
                    <Input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        label="Konfirmasi Password"
                        placeholder={"Password"}
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        errors={errors.password_confirmation}
                    />
                </div>

                <div className="flex justify-center gap-1">
                    <span>Sudah punya akun?</span>
                    <Link
                        href="/login"
                        className="text-primary-600 font-semibold underline"
                    >
                        Masuk
                    </Link>
                </div>

                <PrimaryButton disabled={processing}>Daftar</PrimaryButton>
            </form>
        </div>
    );
}
