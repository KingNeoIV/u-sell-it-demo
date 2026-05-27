import AppRouter from './router/AppRouter';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className='min-h-screen flex flex-col'>
            <main className="flex-1">
                <AppRouter />
            </main>

            <Footer />
        </div>
    );
}