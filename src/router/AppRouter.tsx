import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import NewUser from '../pages/newUser';
import ResetPassword from '../pages/ResetPassword'; 

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/signup' element={<NewUser />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
        </Routes>
    );
}