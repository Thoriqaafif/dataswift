import Input from "@/Components/Input";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: true,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Head title="Login" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="w-full flex flex-col gap-6 max-w-xl"
            >
                <div className="flex flex-row justify-center items-center gap-1.5 box-border">
                    <img src="images/logo.svg" alt="Logo" />
                    <p className="border-bw-primary text-3xl font-basic">
                        Dataswift
                    </p>
                </div>
                <span className="text-3xl font-bold">Masuk</span>
                <div className="flex flex-col gap-4">
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
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                        errors={errors.password}
                    />
                </div>

                <div className="flex justify-center gap-1">
                    <span>Belum punya akun?</span>
                    <Link
                        href="/register"
                        className="text-primary-600 font-semibold underline"
                    >
                        Daftar
                    </Link>
                </div>

                <PrimaryButton disabled={processing}>Masuk</PrimaryButton>
            </form>
        </div>
    );
}
