import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute'
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Alerts from './pages/Alerts';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings ';
import Reports from './pages/Reports ';


const App = () => {
    return (
        <div>
            <Routes>
                //PublicRoute
                <Route path='/' element={<PublicRoute><Home /></PublicRoute>} />
                <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
                <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />

                //ProtectedRoute
                <Route path='/dashboard' element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} >
                    <Route index element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
                    <Route path='alerts' element={<ProtectedRoute><Alerts /></ProtectedRoute>} />
                    <Route path='analytics' element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
                    <Route path='reports' element={<ProtectedRoute><Reports /></ProtectedRoute>} />
                    <Route path='settings' element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                </Route>

            </Routes>
        </div>
    );
};

export default App;