import React from "react";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("mohit");
  const [userpass, setUserpass] = useState("00");

  const loginbutton = () => {
    if ((name == user) & (password == userpass)) {
      alert("login successful");
    } else alert("please check email and password");
  };
  return (
    <>
      <div className="form">
        <div className="loginimg">
          <img
            src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14955462/2021/7/27/808b3090-603b-4d32-b550-21e3683e959d1627399841405StyloBugGirlsPinkTieredKurtiwithShararaWithDupatta7.jpg"
            alt="img"
          />
        </div>
        <div className="form_body">
          <h1>login</h1>
          User Email-ID
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control m-2"
            id="exampleFormControlInput1"
            placeholder="User Email"
          />
          User Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control m-2"
            placeholder="Password"
          />
          <button onClick={loginbutton} className="btn btn-primary m-2">
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
