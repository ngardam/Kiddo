import React, { useState } from "react";
import "./Login.css";
import image6 from "../../assets/image-6.png";
import InvestorPortal from "../investor/InvestorPortal";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import ColorBlobs from "../colorBlobs/ColorBlobs";

const Login = () => {
  const [logged, setLogged] = useState(false);
  const [message, setMessage] = useState("");
  const navigate= useNavigate()

  const checkLog = () => {
    if (logged === true) {
      return <InvestorPortal />;
    } else {
      return '<h1>"You did it wrong"</h1>';
    }
  };

  const handleSubmit = async (e) => {
    let email = e.target[0].value;
    let password = e.target[1].value;
    console.log(e);
    
    e.preventDefault();
    fetch("http://localhost:8000/signin", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),

      //* DIVE PLS
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(email, password, data);
        if (data.auth) {
          setLogged(true);
          let token = data.token;
          localStorage.setItem("token", token) 
          
          navigate("/investors")
        } else {
          setLogged(false)
          setMessage(data.message)
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container className="loginGrid">
      <Grid container className="banner" xs={12}>
        <Grid item className="logBanner" xs={12}>
        <h2 className="logH2">INVESTOR LOGIN</h2>
        </Grid>
      </Grid>
          <Grid 
        container 
        className="form-container" 
        xs={12} 
        justify-content="space-evenly"
        sx={{ flexDirection: { md: "row" } }}>
        <form onSubmit={handleSubmit}>
        <Grid item className="labelLog" xs={12}>Email </Grid>
            <Grid item className="input" xs={12}>
          <input 
          type="text"
          name="email"/>
          </Grid>
          <Grid item className="labelLog" xs={12}>Password</Grid>
          <Grid container className="input" xs={12}>
          <input
            type="text"
            name="password"
          />
          </Grid>
          <Grid item className="logButton" xs={12}>
          <button id= "login-btn">Login</button>
          <p>{message}</p>
          </Grid>
        </form>
      </Grid>
      <Grid className="regContainer" xs={12}>
      <Grid item className="labelLoginRegPrompt" xs={12}>Not A Member Yet?</Grid>
        <Link to="/register"><button id="reg-btn">Register</button></Link>
      </Grid>
      <Grid className="adminContainer" xs={12}>
      </Grid>

      {checkLog}
      <ColorBlobs/>
    </Grid>
  );
};

export default Login;
