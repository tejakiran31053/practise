import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    navigate("/");
  };

  return (
    <div className="navbar">

      <Link to="/dashboard?tab=home" style={{color:"white", marginRight:"20px"}}>
        Home
      </Link>

      <Link to="/dashboard?tab=users" style={{color:"white", marginRight:"20px"}}>
        View Users
      </Link>

      <Link to="/dashboard?tab=api" style={{color:"white", marginRight:"20px"}}>
        API Demo
      </Link>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default AdminNavbar;