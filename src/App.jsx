import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import BusinessModel from "./components/BusinessModel";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <Main />
        <Problem />
        <Solution />
        <BusinessModel />
      </div>
    </>
  )
}

export default App