import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {
  MyUseContextHook,
  MyUseEffectHook,
  MyUseRefHook,
  MyUseStateHook,
  DashboardWithAuth,
} from "./components";

function App() {
  return (
    <Router>
      <div>
        <h1 className="bg-gray-500 p-5 text-4xl font-bold text-center">React Learnings</h1>

        {/* Navigation Menu */}
        <nav className="flex justify-center space-x-14 m-4">
          <NavLink
            to="/state"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use State Hook
          </NavLink>
          <NavLink
            to="/effect"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 font-bold" : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Effect Hook
          </NavLink>
          <NavLink
            to="/context"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 font-bold" : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Context Hook
          </NavLink>
          <NavLink
            to="/ref"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 font-bold" : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Reference Hook
          </NavLink>
          <NavLink
            to="/hoc"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 font-bold" : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Higher-Order-Component
          </NavLink>
        </nav>

        {/* Route Outlet */}
        <div className="flex justify-center p-4">
          <Routes>
            <Route path="/state" element={<MyUseStateHook />} />
            <Route path="/effect" element={<MyUseEffectHook />} />
            <Route path="/context" element={<MyUseContextHook />} />
            <Route path="/ref" element={<MyUseRefHook />} />
            <Route path="/hoc" element={<DashboardWithAuth />} />

            {/* Default route */}
            <Route path="*" element={<div>Select a topic from above</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
