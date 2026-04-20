import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>

    );
}