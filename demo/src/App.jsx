import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<PublicRoute><h1>Home</h1></PublicRoute>} />
                <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
                <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
                <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
        </div>
    );
};

export default App;