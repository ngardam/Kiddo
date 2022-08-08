import React , { useState } from "react";
import "./Home.css";
import video from "../../assets/animation.mp4";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import image4 from "../../assets/image-4.png";
import image5 from "../../assets/image-5.png";
import image7 from "../../assets/image-7.png";
import { Grid } from "@mui/material";
import ColorBlobs from "../colorBlobs/ColorBlobs";

const Home = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [submission, setSubmission] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/newsletter', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then((response) => response.json())
    .then((data) => {
      if(!data.duplicate){
        setSubmission("Thank you for signing up! We will contact you in the future")
      }
      else{
        setSubmission("Error: Email has already been used to sign up for newsletter")
      };
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (

// Start of Exp. BLOBS CITY! 
<>
    <Grid container className="gridHomeContainer" justifyContent="center">



        <h1 className="title">Welcome To Kiddo!</h1>
      <Grid item className="animation" xs={10}>
        <video className="videoBox" width="100%" height="100%" controls>
          <source src={video} id="vid1" type="video/mp4" />
        </video>
      </Grid>
      <Grid item className="missionGrid" xs={12}>
        <div className="register">
          <button className="register-button">Register Here</button>
        </div>

        <div className="mission-statement">
          <h1 className="missionHead">Our Mission</h1>
          <p width="100%" className="missionText">
            Kiddo is a new social network for children. Through a thorough
            understanding of the existing social media ecosystem we aim to
            develop Kiddo with fundamentally different values and priorities:
            Our users are our customers, not our products. Kiddo will be
            ad-free, relying on small monthly subscription charges instead of
            advertisements. This alone removes most of the structural incentives
            for unhealthy social network features. Our goal is to maximize child
            development and entertainment, not screen time. Kiddo recognizes it
            should be a small part of a much larger non-screen life for kids. We
            will rely on the insights of recognized childhood development
            experts to ensure an enriching and supportive environment.Our
            workers and users direct the future of Kiddo. Kiddo’s ownership and
            day-to-day decisions will be operated as a worker cooperative, with
            any outside investors having equity but no voice in governance.
            Users will have a voice on the future of Kiddo via elected,
            volunteer advisory boards.
          </p>
        </div>
      </Grid>
      <Grid
        container
        className="infoBoxes"
        xs={12}
        justifyContent="space-evenly"
        sx={{ flexDirection: { md: "row" } }}
      >
        <Grid
          container
          className="infoOne"
          justifyContent="space-evenly"
          md={5}
          xs={9}
        >
          <Grid item className="imageOne" width="50%" xs={5}>
            <img src={image1} id="img1" alt="first image" width="100%" />
          </Grid>
          <Grid item className="infoText1" xs={5}>
            <p>information lorem lorem lorem</p>
          </Grid>
        </Grid>

        <Grid
          container
          className="infoOne"
          md={5}
          xs={9}
          justifyContent="space-evenly"
        >
          <Grid item className="imageOne" width="50%" xs={5}>
            <img src={image2} id="img2" alt="second image" width="100%" />
          </Grid>
          <Grid item className="infoText2" xs={5}>
            <p>information lorem lorem lorem</p>
          </Grid>
        </Grid>

        <Grid
          container
          className="infoOne"
          md={5}
          xs={9}
          justifyContent="space-evenly"
        >
          <Grid item className="imageOne" width="50%" xs={5}>
            <img src={image3} id="img3" alt="third image" width="100%" />
          </Grid>
          <Grid item className="infoText2" xs={5}>
            <p>information lorem lorem lorem</p>
          </Grid>
        </Grid>

        <Grid
          container
          className="infoOne"
          md={5}
          xs={9}
          justifyContent="space-evenly"
        >
          <Grid item className="imageOne" width="50%" xs={5}>
            <img src={image7} id="img7" alt="ads image" width="100%" />
          </Grid>
          <Grid item className="infoText2" xs={5}>
            <p>information lorem lorem lorem</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className="newsies" xs={10}>
        <div id="inputform">
          <form onSubmit={onSubmit} className="newsForm">
            <input type="text" onChange={(e) =>{setName(e.target.value)}} placeholder="name"></input>
            <input type="text" onChange={(e) =>{setEmail(e.target.value)}} placeholder="email"></input>
            <input type="text" onChange={(e) =>{setPhone(e.target.value)}} placeholder="phone"></input>
            <input type="Submit" />
            <p>{submission}</p>
          </form>
        </div>
      </Grid>
      <ColorBlobs/>
    </Grid>


    </>
  );
};

export default Home;
