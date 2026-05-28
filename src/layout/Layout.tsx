import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Top Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}