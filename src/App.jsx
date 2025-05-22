import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <Main />
        <Problem />
        <Solution />
      </div>
    </>
  )
}

export default App