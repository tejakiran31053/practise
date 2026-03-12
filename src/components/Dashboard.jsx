import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import UsersTable from "./UsersTable";
import ApiData from "./ApiData";

function Dashboard(){

  const [searchParams] = useSearchParams();

  const tab = useMemo(() => searchParams.get("tab") || "home", [searchParams]);

  const title = tab === "home"
    ? "I am in Home Page"
    : tab === "users"
      ? "Registered Users"
      : "API Data";

  return(
    <div className="container">

      <h2>Admin Dashboard</h2>
      <h3>{title}</h3>

      {tab === "home" && (
        <p>You are in admin home.</p>
      )}

      {tab === "users" && <UsersTable/>}

      {tab === "api" && (
        <>
          <br/>
          <h3>API Data</h3>
          <ApiData/>
        </>
      )}

    </div>
  )
}

export default Dashboard;