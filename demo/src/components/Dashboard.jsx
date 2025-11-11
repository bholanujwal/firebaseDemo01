import { useFirebase } from "../context/firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await firebase.logout();
            alert("Logged out successfully!");

            setTimeout(() => {
                navigate("/"); // redirect after logout
            }, 50);
        } catch (error) {
            console.error("Logout error:", error.message);
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
