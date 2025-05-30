import React from "react";
import fruits from "../assets/fruits.png"
import electro from "../assets/electro.png"
import spray from "../assets/spray.png"
import electricBike from "../assets/electric-bike.png"
import recycle from "../assets/recycle-shopper.png"

const BusinessObj = [
    {
        img: fruits,
        line: "Fruits and Vegetables Sale Out",
    },
    {
        img: electro,
        line: "Electric Distribution Profit"
    },
    {
        img: spray,
        line: "Mosquito System",
    },
    {
        img: electricBike,
        line: "Electrical Mobility Rental",
    },
    {
        img: recycle,
        line: "Plastic Recycling",
    },
]

function BusinessModel() {
    return (
        <>
            <div className="business-container">
                <h1 className="business-heading">Business Model</h1>
                <hr />
                <p className="business-para">Crowd-funding ownership of</p>
                <div className="business-images">
                    {BusinessObj.map((item, index) => {
                        return (
                            <div key={index} className="business-inner-images" >
                                <div className="align">
                                    <img className="business-img" src={item.img} />
                                    <p className="para">{item.line}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BusinessModel