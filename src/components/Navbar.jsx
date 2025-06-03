import React from "react";
import "../App.css"

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <div className="texts">
                    <div className="navbar-text-heading">
                        <h1 className="heading">Green Protocol</h1>
                    </div>
                    <div >
                        <ul className="navbar-text">
                            <li><a className="anchor" href="#Problems">Problem</a></li>
                            <li><a className="anchor" href="#Solutions">Solution</a></li>
                            <li><a className="anchor" href="#BusinessModel">Business Model</a></li>
                            <li><a className="anchor" href="">Profit Distribution</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Navbar;