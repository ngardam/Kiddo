
import React from "react";
import "./Register.css";
import image6 from "../../assets/image-8.png";
import { Grid } from "@mui/material";
import ColorBlobs from "../colorBlobs/ColorBlobs";


const Register = () => {
  return (

    <Grid container className="regContainer" xs={12}>
      <Grid container className="banner">
          <h1 className="regPrompt">REGISTER TO JOIN OUR MISSION</h1>
          <Grid item className="regImg" width="50%" xs={9}>
            <img src={image6} id="img7" alt="ads image" width="100%" />
          </Grid>
        </Grid>
      <form method="POST" action="http://localhost:8000/signup/submit">
        <Grid container className="regForm" md={12} xs={12}>
          <Grid container className="field" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              First Name
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input
                type="text"
                name="firstName"
              />
            </Grid>
          </Grid>
          <Grid container className="field" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Last Name
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input
                type="text"
                name="lastName"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Company Name
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input
                type="text"
                name="business"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Email
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input type="text" name="email" />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Country
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input type="text"/>
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              State
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input type="text" />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Address
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input
                type="text"
                name="address"
              />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              ZIP
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input type="text" />
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Password
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input
                type="text"
                name="password"/>
            </Grid>
          </Grid>
          <Grid container className="first" md={6} xs={12}>
            <Grid item className="label" md={5} xs={10}>
              Re-Enter Password
            </Grid>
            <Grid item className="input" md={5} xs={10}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="button" xs={12}>
          <button>Register</button>
        </Grid>
      </form>
      <ColorBlobs/>
    </Grid>
  );
};

export default Register;

