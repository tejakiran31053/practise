import UsersTable from "./UsersTable";
import ApiData from "./ApiData";

function Dashboard(){

  return(
        <div className="container">
      <h2>Admin Dashboard</h2>

      <UsersTable/>

      <br/>

      <h3>API Data</h3>
      <ApiData/>
    </div>
  )
}

export default Dashboard;