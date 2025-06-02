import React from "react";
import arrow from "../assets/arrow.png"
import people from "../assets/people.png"
import vegNpanel from "../assets/vegs-panel.png"
import house from "../assets/leaf-house.png"
import leftRightArrow from "../assets/left-right-arrow.png"
import profitArrow from "../assets/profit-arrow.png"
import dollar from "../assets/dollar.png"
import leaf from "../assets/leaf.png"
import NFT from "../assets/golden-nft2.png"

function Example() {
    return (
        <>
            <div className="example">
                <div className="example-inner">
                    <h1 className="example-heading">Example</h1>
                    <hr />
                </div>
                <div>
                    <div className="example-line">
                        <p>1 Greenhouse = <span>100 NFT</span><img src={arrow} /> <span>100 USD</span> Price </p>
                    </div>
                    <div className="example-second">
                        <img className="people" src={people} />
                        <div>
                            <p>Buy</p>
                            <img src={arrow} />
                        </div>
                        <img className="house" src={house} />
                        <div>
                            <p>Generate</p>
                            <img src={arrow} />
                        </div>
                        <img className="vegNpanel" src={vegNpanel} />
                    </div>
                    <div className="example-third">
                        <img src={profitArrow} />
                        <img className="dollar" src={dollar} />
                        <img src={leftRightArrow} />
                    </div>
                </div>
                <div className="second-example">
                    <div className="gray">
                        <img src={leaf} />
                        {/* <div > */}
                            <p className="gray-p">Buy NFT to help the environment and get passive income</p>
                        {/* </div> */}
                    </div>
                    <div className="green">
                        <img src={NFT} />
                        <div className="green-p">
                            <p>Advantage: Resale the ownership Borrow Generate profit</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Example