import React from "react";
import electro from "../assets/electro.png"
import dots from "../assets/sample-dots.png"
import NFT from "../assets/golden-nft.png"
import leafs from "../assets/leafs2.png"

function Main() {
    return (
        <>
            <div className="Main">
                <div className="main-heading">
                    <h1 className="heading-main">Green Protocol</h1>
                </div>
                <div className="images">
                    <img className="img1" src={electro} />
                    <img className="img2" src={dots} />
                    <img className="img1" src={NFT} />
                    <img className="img2" src={dots} />
                    <img className="img1" src={leafs} />
                </div>
            </div>
        </>
    )
}

export default Main;