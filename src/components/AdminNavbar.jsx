import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    sessionStorage.removeItem("adminLoggedIn");   

    navigate("/");
  };

  return (
    <div className="navbar">

      <Link to="/dashboard" style={{color:"white", marginRight:"20px"}}>
        Dashboard
      </Link>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default AdminNavbar;