import { useFirebase } from "../context/firebase"; 
import { useNavigate, NavLink } from "react-router-dom";
import "./Dashboard.css";

const LeftSidebar = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await firebase.logout();
            alert("Logged out successfully!");

            
            setTimeout(() => {
                navigate("/"); // redirect to home or login page
            }, 50);
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    return (
        <aside className="left-sidebar">
            <div className="sidebar-header">
                <h1>H²Otronics</h1>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                <NavLink to="/dashboard/alerts" className="nav-link">Alerts</NavLink>
                <NavLink to="/dashboard/analytics" className="nav-link">Analytics</NavLink>
                <NavLink to="/dashboard/reports" className="nav-link">Reports</NavLink>
                <NavLink to="/dashboard/settings" className="nav-link">Settings</NavLink>
            </nav>

            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
        </aside>
    );
};

export default LeftSidebar;
