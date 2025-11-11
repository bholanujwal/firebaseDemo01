import LeftSideBar from "./LeftSideBar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import DashboardHome from "../pages/DashboardHome";

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <LeftSideBar />
            <Outlet />
            {/* <DashboardHome /> */}
        </div>
    );
};

export default DashboardLayout;
