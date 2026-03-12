function UsersTable(){

  const users = JSON.parse(localStorage.getItem("users")) || [];

  return(
    <div>

      <h3>Registered Users</h3>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u,index)=>(
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.gender}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}

export default UsersTable;