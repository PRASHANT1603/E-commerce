import react from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
const LoginPage = ()=>{
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");



  const handleLogin = async()=> {
    try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
      setData(res.data);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  const handleRegister = async()=>{
    try{
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        mobileNumber: mobile,
        email,
        password,
      });
      setData(res.data);
      console.log(res.data);
      // localStorage.setItem("token", res.data.token);
      navigate("/");

    }catch(err){
      console.log(err);
    }
  }
     
  
  return (
    <>
      <div>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>login</button>
        <br />

        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );

}

export default LoginPage;