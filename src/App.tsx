import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {
  MyUseContextHook,
  MyUseEffectHook,
  MyUseRefHook,
  MyUseStateHook,
  DashboardWithAuth,
  MyUseCallbackHook,
  // MyUseMemoHook,  // Assuming you have this component
} from "./components";

function App() {
  return (
    <Router>
      <div>
        <h1 className="bg-gray-500 p-5 text-4xl font-bold text-center">
          React Learnings
        </h1>

        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center gap-4 m-4 text-lg ">
          <NavLink
            to="/state"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use State Hook
          </NavLink>
          <NavLink
            to="/effect"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Effect Hook
          </NavLink>
          <NavLink
            to="/context"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Context Hook
          </NavLink>
          <NavLink
            to="/ref"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Reference Hook
          </NavLink>
          <NavLink
            to="/hoc"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Higher-Order Component
          </NavLink>
          <NavLink
            to="/callback"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Callback Hook
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-blue-600 font-bold text-blue-700"
                : "text-gray-600 hover:border-b-2 hover:border-gray-400"
            }
          >
            Use Memo Hook
          </NavLink>
        </nav>

        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

        {/* Route Outlet */}
        <div className="flex justify-center p-4">
          <Routes>
            <Route path="/state" element={<MyUseStateHook />} />
            <Route path="/effect" element={<MyUseEffectHook />} />
            <Route path="/context" element={<MyUseContextHook />} />
            <Route path="/ref" element={<MyUseRefHook />} />
            <Route path="/hoc" element={<DashboardWithAuth />} />
            <Route path="/callback" element={<MyUseCallbackHook />} />
            {/* <Route path="/memo" element={<MyUseMemoHook />} /> */}

            {/* Default fallback route */}
            <Route path="*" element={<div>Select a topic from above</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
