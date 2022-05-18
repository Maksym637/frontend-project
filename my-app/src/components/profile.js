import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/profile.css";
import axios from 'axios'

export default function Userl() {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("userData")) || {}
  );
  const [oldUser, setOldUser] = useState(
    { oldPassword: user.password, oldUsername: user.username } || ""
  );

  let navigate = useNavigate();
  const saveData = (e) => {
    e.preventDefault();
    const requestURL = `http://localhost:5000/user/${oldUser.oldUsername}`;
    // sendRequest(
    //   "PUT",
    //   requestURL,
    //   oldUser.oldUsername,
    //   oldUser.oldPassword,
    //   user
    // )
    //   .then((data) => {
    //     window.localStorage.setItem("userData", JSON.stringify(data));
    //     setOldUser({ oldPassword: user.password, oldUsername: user.username });
    //     alert("User data changed successfully.");
    //   })
    //   .catch((err) => alert(err["error"]));
  };

  const logout = (out) => {
    out.preventDefault();
    setUser({
      username: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      phoneNumber: undefined,
    });
    alert("Logged out.");
    window.localStorage.clear();
    navigate("/login");
  };

  const deleteData = (del) => {
    del.preventDefault();
    setUser({
      username: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      password: undefined,
      phoneNumber: undefined,
    });
    window.localStorage.clear();
    const requestURL = `http://localhost:5000/user/${oldUser.oldUsername}`;
    // sendRequest("DELETE", requestURL, oldUser.oldUsername, oldUser.oldPassword)
    //   .then((data) => {
    //     setOldUser({ oldPassword: undefined, oldUsername: undefined });
    //     alert(data);
    //   })
    //   .catch((err) => alert(err["error"]));
    // navigate("/login");
  };

  return (
    <div className="wrapper-top">
      <div className="title_profile">
          <i>Personal Information</i>
      </div>
      <div className="row"></div>
      <div>
        <form>
          <div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <input
                    data-testid="input-username"
                    type="text"
                    id="input-username"
                    className="form-control form-control-alternative"
                    placeholder="Username"
                    defaultValue={user?.username || ""}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, username: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <input
                    data-testid="input-email"
                    type="text"
                    id="input-email"
                    className="form-control form-control-alternative"
                    placeholder="Email"
                    defaultValue={user?.email || ""}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <input
                    data-testid="input-first-name"
                    type="text"
                    id="input-first-name"
                    className="form-control form-control-alternative"
                    placeholder="First name"
                    defaultValue={user?.firstName || ""}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <input
                    data-testid="input-last-name"
                    type="text"
                    id="input-last-name"
                    className="form-control form-control-alternative"
                    placeholder="Last name"
                    defaultValue={user?.lastName || ""}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div>
                  <input
                    data-testid="input-password"
                    type="password"
                    id="input-password"
                    className="form-control form-control-alternative"
                    placeholder="Password"
                    defaultValue={user?.password || ""}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, password: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div>
                  <input
                    data-testid="input-phone"
                    type="text"
                    id="input-phone"
                    className="form-control form-control-alternative"
                    placeholder="Phone"
                    defaultValue={user?.phoneNumber || ""}
                    onChange={(e) =>
                      setUser((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <form>
          <div className="box">
            <input
              data-testid="save"
              type="submit"
              name=""
              value="Save"
              onClick={saveData}
            ></input>
            <input
              data-testid="delete"
              type="submit"
              name=""
              value="Delete account"
              onClick={deleteData}
            ></input>
            <input
              data-testid="logout"
              type="submit"
              name=""
              value="Log Out"
              onClick={logout}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}