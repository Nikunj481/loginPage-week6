import { useState } from "react";
import "../SignUp.css";
import { useNavigate } from "react-router-dom";
const SignUp= () => {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // <Link to={"/home"}/>
    localStorage.setItem(users.email, JSON.stringify(users));
    alert("Login Please")
    navigate("/");
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="sign" onSubmit={handleSubmit}>
      <h1>Signup Page</h1>
      <div>
        <input
          type="text"
          name="firstName"
          required
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          required
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="email"
          required
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
};

export default SignUp;

// export default Signup;
