import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ConfirmSignUp() {
  let query = useQuery();
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    const token = query.get("token");

    axios
      .post("http://localhost:8000/confirm-email-and-register", {
        emailToken: token,
      })
      .then((res) => res.data)
      .then((res) => {
        if (res.success) {
          setMessage("User successfully registered!");
          setIsSuccessful(true);
        } else {
          setMessage("User not registered!");
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Something went wrong with server!!");
      });
  }, []);

  return (
    <div>
      {message}{" "}
      {isSuccessful && (
        <Link to="/login" style={{ color: "#7BAAEA" }}>
          Goto Login Page
        </Link>
      )}
    </div>
  );
}
