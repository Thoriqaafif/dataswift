import Logo from "@/Components/Logo";
import { cn } from "@/Lib/utils";
import { Link } from "@inertiajs/react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

import {
    MdDataUsage,
    MdHome,
    MdInsertChart,
    MdLogout,
    MdOutlineExplore,
    MdPerson,
    MdSettings,
} from "react-icons/md";

const sidebarItems = [
    {
        Icon: MdHome,
        name: "Beranda",
        href: "beranda",
    },
    {
        Icon: MdOutlineExplore,
        name: "Eksplor",
        href: "eksplor",
    },
    {
        Icon: MdInsertChart,
        name: "Analisis",
        href: "analisis",
    },
    {
        Icon: MdDataUsage,
        name: "Penggunaan",
        href: "penggunaan",
    },
];

export default function DashboardLayout({ user, header, children }) {
    return (
        <div className="flex min-h-screen bg-bw-surface text-bw-primary">
            {/* sidebar */}
            <div className="flex flex-col gap-10 p-10 pt-14 bg-bw-white z-[1]">
                <Logo />
                <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
                    {sidebarItems.map(({ Icon, name, href }) => (
                        <Link
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 font-semibold text-bw-secondary w-[200px] rounded-md",
                                route().current(href) &&
                                    "bg-primary-600 text-bw-white"
                            )}
                            href={route(href)}
                            key={name}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 font-semibold text-bw-secondary w-[200px]">
                    <HiOutlineCurrencyDollar className="w-5 h-5" />
                    <span>Credits: {user.credit}</span>
                </div>
                <div className="flex flex-col gap-4">
                    <Link
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 font-semibold text-bw-secondary w-[200px] rounded-md"
                        )}
                        href={route("profile.edit")}
                    >
                        <MdPerson className="w-5 h-5" />
                        <span>Profil</span>
                    </Link>
                    <Link
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 font-semibold text-bw-secondary w-[200px] rounded-md"
                        )}
                    >
                        <MdSettings className="w-5 h-5" />
                        <span>Pengaturan</span>
                    </Link>
                    <Link
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 font-semibold text-bw-secondary w-[200px] rounded-md"
                        )}
                        method="post"
                        href={route("logout")}
                        as="button"
                    >
                        <MdLogout className="w-5 h-5" />
                        <span>Keluar</span>
                    </Link>
                </div>
            </div>

            <div className="w-full flex-col">
                <div className="text-2xl font-bold px-10 py-6 w-full bg-bw-white shadow-md">
                    {header}
                </div>
                <div className="px-10 py-6">{children}</div>
            </div>
        </div>
    );
}
