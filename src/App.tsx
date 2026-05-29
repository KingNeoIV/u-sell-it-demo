import AppRouter from './router/AppRouter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />

            <main className="flex-1">
                <AppRouter />
            </main>

            <Footer />
        </div>
    );
}