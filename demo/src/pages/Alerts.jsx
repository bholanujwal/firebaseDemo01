import "../components/Dashboard.css";

// Example static alerts
const alerts = [
    { id: 1, message: "Roof Tank 1 Low Water", type: "critical", time: "10:30 AM" },
    { id: 2, message: "Pump 2 Fault Detected", type: "warning", time: "10:25 AM" },
    { id: 3, message: "Basement Tank Refilled", type: "resolved", time: "10:10 AM" },
];

const Alerts = () => {
    return (
        <div className="dashboard-container">
            <div className="right-sidebar">
                <h2 className="page-title">Alerts</h2>

                <div className="alerts-list">
                    {alerts.map((alert) => (
                        <div key={alert.id} className={`alert-card ${alert.type}`}>
                            <div className="alert-message">{alert.message}</div>
                            <div className="alert-time">{alert.time}</div>
                            {alert.type !== "resolved" && (
                                <button className="resolve-button">Mark as Resolved</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Alerts;
