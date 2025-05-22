import React from "react";
import problems from "../assets/question-mark.png"


function Problem() {
    return (
        <>
            <div className="Problems-container">
                <h1 className="problem-heading" id="Problems">Problem</h1>
                <hr />
                <div className="problems-def">
                    <p className="text">Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion. The conservation movement lobbies for protection of endangered species and protection of any ecologically valuable natural areas, genetically modified foods and global warming.</p>
                    <img className="problem-image" src={problems} alt="Problems" />
                </div>
            </div>
        </>
    )
}

export default Problem;