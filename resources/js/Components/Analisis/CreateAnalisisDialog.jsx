import { cn } from "@/Lib/utils";
import { useForm } from "@inertiajs/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import FileInput from "../FileInput";
import Input from "../Input";
import PrimaryButton from "../PrimaryButton";

export default function CreateAnalisisDialog({ user }) {
    const [open, setOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        file: null,
    });

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("analisis.store"), {
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <div>
                    <PrimaryButton className="rounded-md">
                        <MdAdd className="w-5 h-5" />
                    </PrimaryButton>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-[2]" />
                <Dialog.Content
                    className={cn(
                        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                        "bg-bw-white text-accent-500",
                        "flex flex-col gap-6 p-6 rounded-2xl w-full max-w-lg max-h-[95%] z-[3]"
                    )}
                >
                    <Dialog.Description className="hidden" />
                    <Dialog.Title className="flex items-center gap-2">
                        <MdAdd className="w-5 h-5" /> Tambah Penelitian
                    </Dialog.Title>

                    <form onSubmit={submit} className="flex flex-col gap-4">
                        <Input
                            id="title"
                            name="title"
                            label="Judul Penelitian"
                            placeholder="Judul Penelitian"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            errors={errors.title}
                        />

                        <FileInput
                            setFile={(data) => setData("file", data)}
                            id="file"
                            name="file"
                            label="File"
                            file={data.file}
                            errors={errors.file}
                        />

                        <PrimaryButton>Tambah Penelitian</PrimaryButton>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
