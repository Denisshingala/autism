import React, { useEffect, useState } from "react";
import "./login-signup.css";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import BrandImage from "../../images/login_signup_brand_image.png";
import Logo from "../../images/logo.png";
import PasswordField from "../../components/PasswordField";
import SelectField from "../../components/SelectField";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import AlertPopUp from "../../components/AlertPopUp";
import axios from "axios";
import validator from "validator";

const Signup = () => {
  const navigate = useNavigate();
  const [country, setCountryData] = useState([]);
  let currentYear = new Date().getFullYear();
  let gender = ["Male", "Female", "Other"];
  const [data, setData] = useState({
    name: "",
    email: "",
    DOB: "",
    country: "NaN",
    gender: "NaN",
    password: "",
  });

  const [alert, setAlert] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(async (res) => await res.json())
      .then((res) => {
        let temp = [];
        temp.push(res.map((data) => data.name.common));
        temp[0].sort();
        return temp;
      })
      .then((data) => {
        setCountryData(data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const submit = () => {
    if (
      !data.name ||
      !data.email ||
      !data.DOB ||
      data.country === "NaN" ||
      data.gender === "NaN" ||
      !data.password
    ) {
      setAlert({ error: "All fields are required!" });
      return;
    }

    if (!validator.isEmail(data.email)) {
      setAlert({ error: "Email must be a valid email!" });
      return;
    }

    if (!validator.isDate(data.DOB)) {
      setAlert({ error: "DOB must be a valid date!" });
      return;
    }

    axios
      .post("http://localhost:8000/send-email", data)
      .then((res) => res.data)
      .then((res) => {
        if (res.success) {
          setAlert({ success: res.message });
        } else {
          setAlert({ error: res.error });
        }
      })
      .catch((err) => {
        console.log(err);
        setAlert({ error: "Something went wrong with server!!" });
      });
  };

  return (
    <>
      <AlertPopUp alert={alert} setAlert={setAlert} />

      <div id="container">
        <div id="login-signup-container">
          <Button
            className="m-4"
            onClick={() => {
              navigate("/");
            }}
          >
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
                  value={data.name}
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }));
                  }}
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
                  value={data.email}
                  onChange={(e) => {
                    setData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }));
                  }}
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
                    value={data.DOB}
                    onChange={(e) => {
                      setData((prevData) => ({
                        ...prevData,
                        DOB: e.target.value,
                      }));
                    }}
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
                    value={data.gender}
                    onChange={(data) => {
                      setData((prevData) => ({ ...prevData, gender: data }));
                    }}
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
                  value={data.country}
                  onChange={(data) => {
                    setData((prevData) => ({ ...prevData, country: data }));
                  }}
                />
              </div>

              <div>
                <p style={{ margin: "30px 0 10px 0", color: "#888888" }}>
                  Password *
                </p>
                <PasswordField
                  onChange={(pass) => {
                    setData((prevData) => ({ ...prevData, password: pass }));
                  }}
                />
              </div>
              <Button
                variant="contained"
                className="login-signup-button"
                onClick={submit}
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
    </>
  );
};

export default Signup;
