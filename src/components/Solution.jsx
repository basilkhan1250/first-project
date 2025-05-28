import React from "react";
import flower from "../assets/flower.png"
import system from "../assets/system-leaf.png"
import water from "../assets/recycle-water.png"
import spray from "../assets/spray.png"
import bike from "../assets/electric-bike.png"
import panel from "../assets/solar-panel.png"
import recycle from "../assets/recycle-shopper.png"
import cleaning from "../assets/cleaning-water.png"
import sea from "../assets/image1.png"
import garden from "../assets/image2.png"
import wind from "../assets/image3.png"
import phone from "../assets/image4.png"
import electricBike from "../assets/image5.png"
import solarPhone from "../assets/image6.png"
import watering from "../assets/image7.png"
import bottle from "../assets/image8.png"
import ship from "../assets/image9.png"
import bugSpray from "../assets/image10.png"


const SolutionPics = [
    { img1: sea, img2: garden },
    { img1: wind, img2: phone },
    { img1: electricBike, img2: solarPhone },
    { img1: watering, img2: bottle },
    { img1: ship, img2: bugSpray },
];



const SolutionObj = [
    {
        names: "Green Energy",
        img: flower,
    },
    {
        names: "Automated  Agriculture",
        img: system,
    },
    {
        names: "Depuration Rain Water",
        img: water,
    },
    {
        names: "Mosquito Prevention",
        img: spray,
    },
    {
        names: "Electric Mobility",
        img: bike,
    },
    {
        names: "Solar Charging Station",
        img: panel,
    },
    {
        names: "Recycling Plastic",
        img: recycle,
    },
    {
        names: "Cleaning Ocean",
        img: cleaning,
    },
]




function Solution() {


    return (
        <>
            <div className="solution-container">
                <h1 className="solution-heading" id="Solutions">Solution</h1>
                <hr />
                <div className="solution-setting">
                    <div className="solution-box">
                        {SolutionObj.map((item, index) => {
                            let bgColor;
                            let pad;

                            // Define pattern by index
                            if (index === 0 || index === 2 || index === 5 || index === 7) {
                                bgColor = '#00BF54';
                            } else {
                                bgColor = '#009F32';
                            }
                            if (index === 5) {
                                pad = "10px 60px"
                            }
                            else {
                                pad = "10px 70px"
                            }

                            return (
                                <div
                                    key={index}
                                    className="img-div"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    <div className="inner-sol">
                                        <img className="solution-img" src={item.img} alt={item.names} />
                                        <p style={{ padding: pad }}>{item.names}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="solution-pics">
                        {SolutionPics.map((item, index) => {
                            return (

                                <div key={index} className="first-images">
                                    <img className="image" src={item.img1} />
                                    <img className="image" src={item.img2} />
                                </div>



                            )
                            {/* <div className="first-images">
                            <img className="image" src={sea} />
                            <img className="image" src={garden} />
                             </div> */}
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution;