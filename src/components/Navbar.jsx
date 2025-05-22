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
                    <div className="navbar-text">
                        <p><a className="anchor" href="">Problem</a></p>
                        <p><a className="anchor" href="">Solution</a></p>
                        <p><a className="anchor" href="">Business Model</a></p>
                        <p><a className="anchor" href="">Profit Distribution</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;