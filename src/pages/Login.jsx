import React from "react";
import "./css/login.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import BrandImage from "../images/login_signup_brand_image.png";
import Logo from "../images/logo.png";
import PasswordField from "../components/PasswordField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  return (
    <div id="container">
      <div id="login-container">
        <div className="back">
          <ArrowBackIosOutlinedIcon
            style={{ position: "relative", top: "6px" }}
          />
          Exit
        </div>
        <div id="login-form-div">
          <form action="" id="login-form">
            <h2>Login</h2>
            <div style={{ margin: "10px 0" }}>
              <p>Enter your email address</p>
              <TextField
                id="outlined-password-input"
                label="example: shubham@gmail.com"
                type="text"
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <p style={{ lineHeight: "10px", marginTop: "30px" }}>Password</p>
              <PasswordField />
            </div>
            <Button variant="contained" className="login-button">
              Login
            </Button>
            <div id="logo-div">
              <img src={Logo} alt="" />
              <p>@2022 AutsiLearn</p>
            </div>
          </form>
        </div>
      </div>

      <div id="background-branding-container">
        <img src={BrandImage} alt="" />
      </div>
    </div>
  );
}

export default Login;
