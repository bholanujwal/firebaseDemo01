
import "../components/Dashboard.css";

// Static tank data
const tanks = [
    { id: 1, name: "Roof Tank 1", level: 78, status: "normal", lastUpdated: "10:30 AM" },
    { id: 2, name: "Roof Tank 2", level: 55, status: "medium", lastUpdated: "10:28 AM" },
    { id: 3, name: "Basement Tank", level: 20, status: "low", lastUpdated: "10:25 AM" },
];

const DashboardHome = () => {
    return (
        <div className="right-sidebar">
            <h2 className="page-title">Dashboard — Real-Time Monitoring</h2>

            {/* Overview Summary */}
            <div className="overview-summary">
                <div className="summary-card">
                    <p className="summary-title">Tanks OK</p>
                    <p className="summary-value">2</p>
                </div>
                <div className="summary-card">
                    <p className="summary-title">Low Water</p>
                    <p className="summary-value">1</p>
                </div>
                <div className="summary-card">
                    <p className="summary-title">Pumps Running</p>
                    <p className="summary-value">2</p>
                </div>
            </div>

            {/* Tanks Grid */}
            <div className="tanks-grid">
                {tanks.map((tank) => (
                    <div key={tank.id} className="tank-card">
                        <h3 className="tank-name">{tank.name}</h3>

                        <div className="tank-level-bar">
                            <div
                                className={`tank-level-fill ${tank.status}`}
                                style={{ width: `${tank.level}%` }}
                            ></div>
                        </div>

                        <p className="last-updated">Last Updated: {tank.lastUpdated}</p>

                        <button className="pump-button">Pump ON/OFF</button>
                    </div>
                ))}
            </div>

            {/* Add Tank Button */}
            <div className="add-tank-container">
                <button className="add-tank-button">+ Add Tank</button>
            </div>
        </div>
    );
};

export default DashboardHome;
