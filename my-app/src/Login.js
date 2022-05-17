import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendRequest } from "./SendRequest.js";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

export default function Login() {
    const [userLog, setUserLog] = useState(
      JSON.parse(window.localStorage.getItem("userData")) || ""
    );
    let navigate = useNavigate();
    const handleSubmit = (reg) => {
      reg.preventDefault();
      const requestURL = "";
  
      sendRequest("POST", requestURL, null, null, userLog)
        .then((data) => {
          window.localStorage.setItem("userData", JSON.stringify(data));
          alert("Success login.");
          navigate("/service");
        })
        .catch((err) => {
          alert(err["error"]);
        });
    };
  
    return (
      <div className="materialContainer">
        <div className="title">
          <i>Login Form</i>
        </div>
        <div className="main">
        <form className="form1">
          <input
            className="un"
            data-testid="username"
            type="text"
            name="Username"
            placeholder="Username"
            required
            onChange={(e) =>
              setUserLog((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          <input
            className="pass"
            data-testid="password"
            type="password"
            name="Password"
            placeholder="Password"
            required
            onChange={(e) =>
              setUserLog((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <input
            className="submit"
            data-testid="submit-login"
            type="submit"
            name="Submit"
            value="Submit"
            onClick={handleSubmit}
          />
          <div className="registration" align="center">
          <Link to="/register">Registration</Link>
          </div>
        </form>
        </div>
      </div>
    );
}