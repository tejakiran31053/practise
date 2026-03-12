import { useState } from "react";

function Register() {

  const [user,setUser] = useState({
    name:"",
    gender:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));

    alert("User Registered Successfully");

    // Reset the form
    setUser({
      name:"",
      gender:"",
      email:"",
      password:""
    });
  };

  return (
        <div className="container">
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />

        <br/><br/>

        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <br/><br/>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <br/><br/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;