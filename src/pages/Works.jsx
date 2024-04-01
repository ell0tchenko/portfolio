import React, { useState } from 'react';
import WorksElem from "../components/WorksElem";
import WorksImg from "../assets/images/shape-works.png";
import Agroland from "../assets/images/MCA_project/mcagroland.png";
import CatHub from "../assets/images/CH_project/cathub.png";
import Princess from "../assets/images/STP_project/savingtheprincess.png";
import AirFun from "../assets/images/AFS_project/airfunstore.png";
import Shanny from "../assets/images/Shanny_project/shanny.png"

const Works = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseOver = (imageName) => {
        setHoveredImage(imageName);
    };

    const handleMouseOut = () => {
        setHoveredImage(null);
    };

    return (
        <div className="works">
            <div className="image__container">
                {hoveredImage === "saving-the-princess" && <img className="photo" src={Princess} alt="Saving the Princess game screenshot" />}
                {hoveredImage === "cathub" && <img className="photo" src={CatHub} alt="CatHub screenshot" />}
                {hoveredImage === "mc-agroland" && <img className="photo" src={Agroland} alt="Branding cup MC Agroland" />}
                {hoveredImage === "air-fun-store" && <img className="photo" src={AirFun} alt="Air Fun Store logo" />}
                {hoveredImage === "shanny" && <img className="photo" src={Shanny} alt="Shanny logo" />}
            </div>
            <div className="works__container--right">
                <h1>WORKS</h1>
                <div className="works__table">
                    <WorksElem title="saving the princess" type="web development" isLined={true} onMouseOver={() => handleMouseOver("saving-the-princess")} onMouseOut={handleMouseOut} />
                    <WorksElem title="cathub" type="web development" isLined={true} onMouseOver={() => handleMouseOver("cathub")} onMouseOut={handleMouseOut} />
                    <WorksElem title="mc agroland" type="brading" isLined={true} onMouseOver={() => handleMouseOver("mc-agroland")} onMouseOut={handleMouseOut} />
                    <WorksElem title="air fun store" type="brading" isLined={true} onMouseOver={() => handleMouseOver("air-fun-store")} onMouseOut={handleMouseOut}/>
                    <WorksElem title="shanny" type="brading" isLined={false} onMouseOver={() => handleMouseOver("shanny")} onMouseOut={handleMouseOut}/>
                </div>
            </div>
            <img className="shape image--right" src={WorksImg} alt="Decorative shape" />
        </div>
    );
}

export default Works;
