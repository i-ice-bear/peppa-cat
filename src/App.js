import React, { useState } from "react";
import NavComponent from "./lib/functions/Navbar";
import "./App.css";
import HomeComponent from "./lib/page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [mode, setMode] = useState("light");
  const changeTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "#fff";
      document.body.style.transition = "all 200ms ease";
    } else {
      setMode("light");
      document.body.style.transition = "all 200ms ease";
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  };
  return (
    <>
      <BrowserRouter>
        <NavComponent changeTheme={changeTheme} mode={mode} />
        <Routes>
          <Route path="/" element={<HomeComponent upperHead=""/>} />
        </Routes>
      </BrowserRouter>
        {/* <video
          source
          src={require("./lib/images/Opener.mp4")}
          autoPlay
          muted
          id="___background_video"
          loop
        ></video> */}
    </>
  );
};

export default App;
