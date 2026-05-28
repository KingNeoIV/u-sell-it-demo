import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import NewUser from '../pages/newUser';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/dashboard';
import Layout from '../layout/Layout'; 

export default function AppRouter() {
    return (
        <Routes>

            {/* Public pages */}
            <Route path="/" element={<Login />} />
            <Route path='/signup' element={<NewUser />} />
            <Route path='/resetpassword' element={<ResetPassword />} />

            {/* Authenticated pages */}
            <Route 
                path='/dashboard' 
                element={
                    <Layout>
                        <Dashboard />
                    </Layout> 
                }   
            />
        </Routes>
    );
}