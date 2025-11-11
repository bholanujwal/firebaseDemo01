import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

const ProtectedRoute = ({ children }) => {
    const firebase = useFirebase();

    if (firebase.loading) return <div>Loading...</div>;

    if (firebase.isLoggedIn) return children;

    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
