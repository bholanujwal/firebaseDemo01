import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<h1>Home</h1>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<h1>This is Dashboard page</h1>} />

            </Routes>
        </div>
    );
};

export default App;