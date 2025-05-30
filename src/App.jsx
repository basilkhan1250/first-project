import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import BusinessModel from "./components/BusinessModel";
import Example from "./components/Example";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <Main />
        <Problem />
        <Solution />
        <BusinessModel />
        <Example />
      </div>
    </>
  )
}

export default App