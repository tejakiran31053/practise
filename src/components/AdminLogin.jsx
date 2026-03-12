import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin(){

  const [login,setLogin] = useState({
    username:"",
    password:""
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(login.username==="admin" && login.password==="1234"){
      
      sessionStorage.setItem("adminLoggedIn","Yes, he logged in");   

      navigate("/dashboard");
    }else{
      alert("Invalid Credentials");
    }
  }

  return(
    <div className="container">

      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>

        <input 
        type="text" name="username" placeholder="Username" onChange={handleChange}
        />

        <br/><br/>

        <input 
        type="password"  name="password" placeholder="Password" onChange={handleChange}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default AdminLogin;