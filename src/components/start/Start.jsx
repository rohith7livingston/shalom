import React, { useState } from "react";
import "./Start.css";
function Start() {
  const [Result, SetResult] = useState(0);
  function clickadmin()
  {
    SetResult(-1);
   console.log(Result);
  }
  function clickstudent()
  {
    SetResult(1);
  }
  return (
    <div className="Entry-Login">
      <div className="Admins-Login">
      {/* <button className="Login-Admin-Button-tag">Admins</button> */}
        <h1>For Admins</h1>
        <button className="Login-Admin-Button" onClick={clickadmin}>Login</button>
        <p>Don't have an Account ? <br/> &nbsp; contact the creator</p>
       
      </div>
      <div className="Students-Login">
      <h1>For Students</h1>
        <button className="Login-Student-Button" onClick={clickstudent}>Login</button>
        <p>Don't have an Account ? <br/> &nbsp; contact the creator</p>
        <a>Register</a>
      </div>
    </div>
  );
}
export default Start;
