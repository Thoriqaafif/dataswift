import DashboardLayout from "@/Layouts/DashboardLayout";
import { cn } from "@/Lib/utils";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const content = [
    `
    Dari hasil survei, dapat disimpulkan bahwa kesesuaian mata pelajaran di SMA dan dengan
    materi SNBT pada tahun 2023 dan 2024 adalah sama dengan median skala kesesuaian sebesar
    6 dari 10 dengan kriteria skala 1 yaitu “sangat tidak sesuai” dan skala 10 yaitu “sangat sesuai”.
    Mata pelajaran yang sesuai dengan materi SNBT antara lain Matematika Wajib, Matematika
    Minat, Bahasa Indonesia, Bahasa Inggris, dan Fisika. Sementara 3 materi SNBT yang paling
    sesuai dengan mata pelajaran SMA/Sederajat yaitu Literasi Bahasa Indonesia, Literasi Bahasa
    Inggris, dan Pengetahuan Kuantitatif.
    Rekomendasi yang dapat dilakukan untuk meningkatkan mengantisipasi ketidaksesuaian mata
    pelajaran dengan materi SNBT berdasarkan hasil survei ini adalah:
    1. Memberikan pengajaran khusus mengenai materi-materi SNBT
    2. Mempersiapkan siswa kelas 12 untuk fokus terhadap materi dan latihan soal SNBT.
`,
    "Sama-sama, senang membantu Anda!",
];

export default function AnalisisChat({ auth, research }) {
    const [messages, setMessages] = useState([
        {
            role: "system",
            content:
                "Selamat datang di chat bersama AI, bagaimana saya bisa membantu Anda?",
        }, // Example initial message
    ]);
    const [input, setInput] = useState("");

    console.log(messages.length);
    const handleSendMessage = () => {
        if (input.trim() === "") return;

        const userMessage = { role: "user", content: input };

        // Append the user's message
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Mock AI response (replace with API call if needed)
        setTimeout(() => {
            const aiMessage = {
                role: "assistant",
                content: content[Math.floor(messages.length / 2)], // Mock AI response
            };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);
        }, 1000);

        setInput("");
    };

    return (
        <DashboardLayout
            user={auth.user}
            header={`Diskusi Terkait ${research.title}`}
        >
            <Head title="Chat" />

            <main className="flex flex-col  gap-4 h-full">
                {/* Chat View */}
                <div className="flex flex-col flex-1 overflow-y-auto p-4 bg-bw-inline rounded-md">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-4 ${
                                message.role === "user"
                                    ? "text-right"
                                    : "text-left"
                            }`}
                        >
                            <div
                                className={`inline-block rounded-lg px-4 py-2 text-bw-primary ${
                                    message.role === "user"
                                        ? "bg-primary-600"
                                        : "bg-bw-icon"
                                }`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Box */}
                <div className="flex gap-2 items-center">
                    <input
                        type="text"
                        className={cn(
                            "w-full rounded-md px-5 py-3 ring-1 ring-inset ring-bw-icon",
                            "focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-600"
                        )}
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSendMessage();
                        }}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-5 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                    >
                        Send
                    </button>
                </div>
            </main>
        </DashboardLayout>
    );
}
