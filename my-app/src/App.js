import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import LoginRoute from './components/loginroute';
import Register from './components/register';
import User from './components/profile';
import Users from './components/users';
import Home from './components/home';
import Auditoriums from './components/auditoriums';
import Reserve from './components/reserve';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<LoginRoute component={User} />} />
                    <Route path="/book" element={<LoginRoute component={Reserve} />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/auditorium" element={<Auditoriums />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
