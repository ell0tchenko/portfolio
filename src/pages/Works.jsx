import React, { useState, useRef } from 'react';
import WorksElem from "../components/WorksElem";
import WorksShape from "../assets/images/shape-works.png";
import Agroland from "../assets/images/MCA_project/mcagroland.png";
import CatHub from "../assets/images/CH_project/cathub.png";
import Princess from "../assets/images/STP_project/savingtheprincess.png";
import AirFun from "../assets/images/AFS_project/airfunstore.png";
import Shanny from "../assets/images/Shanny_project/shanny.png";
import DeliverNow from "../assets/images/DN_project/DeliverNow.png";
import { Link } from "react-router-dom";

const Works = () => {
    const [hoveredImage, setHoveredImage] = useState("DeliverNow");
    const hoverTimeout = useRef(null);

    const handleMouseOver = (imageName) => {
        if (hoverTimeout.current) {
            clearTimeout(hoverTimeout.current);
        }

        hoverTimeout.current = setTimeout(() => {
            setHoveredImage(imageName);
        }, 100); // Adjust the delay (in milliseconds) as needed
    };

    document.body.style.overflow = 'auto';

    return (
        <div className="works">
            <Link to={`/works/${hoveredImage.replace(/\s+/g, '-')}`} className="image__container">
                {hoveredImage === "Saving the Princess" && <img className="photo" src={Princess} alt="Saving the Princess game screenshot" />}
                {hoveredImage === "CatHub" && <img className="photo" src={CatHub} alt="CatHub screenshot" />}
                {hoveredImage === "MK Agroland" && <img className="photo" src={Agroland} alt="Branding cup MC Agroland" />}
                {hoveredImage === "Air Fun Store" && <img className="photo" src={AirFun} alt="Air Fun Store logo" />}
                {hoveredImage === "Shanny" && <img className="photo" src={Shanny} alt="Shanny logo" />}
                {hoveredImage === "DeliverNow" && <img className="photo" src={DeliverNow} alt="DeliverNow cover" />}
            </Link>
            
            <div className="works__container--right">
                <h1>WORKS</h1>
                <div className="works__table">
                    <WorksElem title="DeliverNow" type="UX&UI design" isLined={true} onMouseOver={() => handleMouseOver("DeliverNow")} />
                    <WorksElem title="MK Agroland" type="brading" isLined={true} onMouseOver={() => handleMouseOver("MK Agroland")} />
                    <WorksElem title="CatHub" type="web development" isLined={true} onMouseOver={() => handleMouseOver("CatHub")} />
                    <WorksElem title="Shanny" type="brading" isLined={true} onMouseOver={() => handleMouseOver("Shanny")} />
                    <WorksElem title="Saving the Princess" type="web development" isLined={true} onMouseOver={() => handleMouseOver("Saving the Princess")} />
                    <WorksElem title="Air Fun Store" type="brading" isLined={false} onMouseOver={() => handleMouseOver("Air Fun Store")} />
                </div>
            </div>
            <img className="shape image--right" src={WorksShape} alt="Decorative shape" />
        </div>
    );
};

export default Works;
