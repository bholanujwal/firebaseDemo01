import { Navigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

const PublicRoute = ({ children }) => {
    const firebase = useFirebase();

    if (firebase.loading) return <div>Loading...</div>;

    if (firebase.isLoggedIn) return <Navigate to="/dashboard" replace />;

    return children;
};

export default PublicRoute;
