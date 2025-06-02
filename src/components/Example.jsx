import React from "react";
import arrow from "../assets/arrow.png"
import people from "../assets/people.png"
import vegNpanel from "../assets/vegs-panel.png"
import house from "../assets/leaf-house.png"

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
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Example