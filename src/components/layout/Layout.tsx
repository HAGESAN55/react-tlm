import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout ({children}: {children: React.ReactNode}) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <div className="flex-1 flex flex-col">
                <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>

    );
}