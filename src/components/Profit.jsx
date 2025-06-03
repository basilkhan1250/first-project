import React from "react";
import profile from "../assets/profile.png"
import hospital from "../assets/hospital.png"
import charity from "../assets/golden-heart.png"

function Profit() {
    return (
        <>
            <div className="profit">
                <h1 id="Profit">Profit Distribution</h1>
                <hr />
                <div className="profit-parent">
                    <div className="dark-green">
                        <img className="profit-img " src={profile} />
                        <p>Owner</p>
                        <p className="bold">70%</p>
                    </div>
                    <div className="light-green">
                        <img className="profit-img" src={hospital} />
                        <p>Company</p>
                        <p className="bold">25%</p>
                    </div>
                    <div className="dark-green">
                        <img className="profit-img" src={charity} />
                        <p>Charity</p>
                        <p className="bold">5%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profit