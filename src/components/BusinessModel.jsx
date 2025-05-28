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
        img: electricBike,
        line: "Electrical Mobility Rental",
    },
    {
        img: electro,
        line: "Electric Distribution Profit",
    },
    {
        img: recycle,
        line: "Plastic Recycling",
    },
    {
        img: spray,
        line: "Mosquito System",
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
                                <img className="business-img" src={item.img} />
                                <p></p>
                            </div>
                            /* <div className="business-inner-images" >
                                <img className="business-img" src={electro} />
                                <p></p>
                            </div>
                            <div className="business-inner-images" >
                                <img className="business-img" src={spray} />
                                <p></p>
                            </div>
                            <div className="business-inner-images" >
                                <img className="business-img" src={electricBike} />
                                <p></p>
                            </div>
                            <div className="business-inner-images" >
                                <img className="business-img" src={recycle} />
                                <p></p>
                            </div> */
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default BusinessModel