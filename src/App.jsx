import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import BusinessModel from "./components/BusinessModel";
import Example from "./components/Example";
import Profit from "./components/Profit"

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
        <Profit />
      </div>
    </>
  )
}

export default App