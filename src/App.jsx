import { HashRouter as Router, Routes, Route } from "react-router-dom";

import MainNavbar from "./components/MainNavbar";
import AdminNavbar from "./components/AdminNavbar";
import Register from "./components/Register";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import "./style.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MainNavbar />
              <Register />
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <div>
              <MainNavbar />
              <AdminLogin />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <AdminNavbar />
              <Dashboard />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;