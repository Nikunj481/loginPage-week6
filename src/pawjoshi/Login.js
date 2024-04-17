import {  useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const UserData = localStorage.getItem(email);
    const data=JSON.parse(UserData)
    console.log(password)
        console.log(data.password)
    //console.log(data);
    if(data.password===password) 
       {
        console.log(password)
        console.log(data.password)
           nav('/home')
       }
    else  
           alert("wrong Password");
    
    
    //nav("/home")
   
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Email: </label>
          <input
            type="text"
            value={email}
            name="name"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Password: </label>
          <input
            type="password"
            value={password}
            name="name"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        <label>Don't have an account? </label>
        <Link to={"/signup"}>signup</Link>
      </div>
    </>
  );
};

export default Login;



