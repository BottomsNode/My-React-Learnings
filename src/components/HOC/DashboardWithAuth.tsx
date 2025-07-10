import Dashboard from "./Dashboard";
import { withAuth } from "./withAuth";

const DashboardWithAuth = withAuth(Dashboard);

export default DashboardWithAuth;
