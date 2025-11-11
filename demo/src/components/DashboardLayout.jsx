import LeftSideBar from "./LeftSideBar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <LeftSideBar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
