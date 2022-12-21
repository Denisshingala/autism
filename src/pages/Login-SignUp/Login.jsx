import React from "react";
import "./login-signup.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import BrandImage from "../../images/login_signup_brand_image.png";
import Logo from "../../images/logo.png";
import PasswordField from "../../components/PasswordField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


function Login() {

  let currentYear = new Date().getFullYear();

  return (
    <div id="container">
      <div id="login-signup-container">
        <Button className="m-4" onClick={() => window.history.go(-1)}>
          <ArrowBackIosOutlinedIcon />
          <span className="backText">Exit</span>
        </Button>
        <div id="login-signup-form-div">
          <form action="" id="login-signup-form">
            <h2>Login</h2>
            <div>
              <p style={{ margin: "30px 0 10px 0", color: "#888888" }}>
                Enter your email address
              </p>
              <TextField
                id="email"
                label="example: shubham@gmail.com"
                type="text"
                style={{ width: "100%" }}
              />
            </div>
            <div>
              <p style={{ margin: "30px 0 10px 0", color: "#888888" }}>
                Password
              </p>
              <PasswordField />
            </div>
            <Link to="/" style={{ color: "#7BAAEA", float: "right", textDecoration: "none", marginTop: "5px" }}>Forgot password</Link>
            <Button variant="contained" className="login-signup-button">
              Login
            </Button>
            <p>
              New account?{" "}
              <Link to="/signup" style={{ color: "#7BAAEA" }}>
                Create an account here
              </Link>
            </p>
            <div id="logo-div">
              <img src={Logo} alt="" />
              <p style={{ fontSize: "12px", margin: "10px 0" }}>
                &copy;{currentYear} AutsiLearn
              </p>
            </div>
          </form>
        </div>
      </div>

      <div id="background-branding-container">
        <img src={BrandImage} alt="BrandImage" />
      </div>
    </div>
  );
}

export default Login;
