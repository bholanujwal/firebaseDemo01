import LeftSidebar from "./demo/src/components/LeftSideBar";
import RightSidebar from "./demo/src/components/DashboardHome";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <LeftSidebar />
            <RightSidebar />
        </div>
    );
}

export default Dashboard;
