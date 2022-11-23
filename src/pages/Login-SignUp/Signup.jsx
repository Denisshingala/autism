import React, { useEffect, useState } from "react";
import "./login-signup.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import BrandImage from "../../images/login_signup_brand_image.png";
import Logo from "../../images/logo.png";
import PasswordField from "../../components/PasswordField";
import SelectField from "../../components/SelectField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  let [country, setCountry] = useState([]);
  let [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    DOB: "",
    gender: "",
    country: "",
    password: "",
  });

  let currentYear = new Date().getFullYear();
  let gender = ["Male", "Female", "Other"];

  // getting all the countries list
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        let temp = [];
        temp.push(
          response.data.map((data) => {
            return data.name.common;
          })
        );
        setCountry(temp[0]);
      })
      .catch((c) => {
        console.log(c);
      });
  }, []);

  // Sending data to backend and register user
  const registerData = () => {
    let data = {
      name: userDetail.name,
      email: userDetail.email,
      country: userDetail.country,
      gender: userDetail.gender,
      password: userDetail.password,
      DOB: userDetail.DOB,
    };
    axios
      .post("http://localhost:8000/register", data)
      .then((response) => {
        console.log(response.data.message, response.data.success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="container">
      <div id="login-signup-container">
        <Button className="m-4">
          <ArrowBackIosOutlinedIcon />
          <span className="backText">Exit</span>
        </Button>
        <div id="login-signup-form-div">
          <form action="" id="login-signup-form">
            <h2>Create Account</h2>

            <div>
              <p style={{ margin: "30px 0 10px 0", color: "#888888" }}>
                Name *
              </p>
              <TextField
                id="name"
                label="example: Shubham Dusane"
                type="text"
                onChange={(e) =>
                  setUserDetail({ ...userDetail, name: e.target.value })
                }
                style={{ width: "100%" }}
              />
            </div>

            <div>
              <p style={{ margin: "30px 0 10px 0", color: "#888888" }}>
                Email address *
              </p>
              <TextField
                id="email"
                label="example: shubham@gmail.com"
                type="text"
                onChange={(e) =>
                  setUserDetail({ ...userDetail, email: e.target.value })
                }
                style={{ width: "100%" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={{ margin: "30px 5px 10px 0", color: "#888888" }}>
                  Date of birth
                </p>
                <TextField
                  id="DOB"
                  type="date"
                  style={{ width: "200px" }}
                  onChange={(e) =>
                    setUserDetail({ ...userDetail, DOB: e.target.value })
                  }
                />
              </div>
              <div>
                <p style={{ margin: "30px 0 10px 5px", color: "#888888" }}>
                  Gender
                </p>
                <SelectField
                  size="200px"
                  field="gender"
                  fieldValues={gender}
                  value={gender}
                  data={userDetail}
                  method={setUserDetail}
                  label="Choose"
                />
              </div>
            </div>

            <div>
              <p style={{ margin: "30px 0 10px 5px", color: "#888888" }}>
                Country
              </p>
              <SelectField
                field="country"
                fieldValues={country}
                data={userDetail}
                method={setUserDetail}
                label="Choose"
              />
            </div>

            <div>
              <p style={{ margin: "30px 0 10px 0", color: "#888888" }}>
                Password *
              </p>
              <PasswordField data={userDetail} method={setUserDetail} />
            </div>
            <Button
              variant="contained"
              className="login-signup-button"
              onClick={() => registerData()}
            >
              Register
            </Button>
            <p style={{ color: "#888888" }}>
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#7BAAEA" }}>
                Login here
              </Link>
            </p>
            <div id="logo-div">
              <img src={Logo} alt="" />
              <p style={{ fontSize: "12px", margin: "10px 0" }}>
                @{currentYear} AutsiLearn
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

export default Signup;
