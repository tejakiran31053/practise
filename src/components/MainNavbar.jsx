import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <div className="navbar">
      <Link to="/">Register</Link> | 
      <Link to="/admin"> Admin Login</Link>
    </div>
  );
}

export default MainNavbar;