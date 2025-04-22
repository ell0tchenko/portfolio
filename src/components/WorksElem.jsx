import { Link } from "react-router-dom";

const WorksElem = ({ title, type, isLined, onMouseOver, onMouseOut }) => {
    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                <Link to={`/works/${title.replace(/\s+/g, '-')}`} className="works-elem__container button">
                <div className="works__title">{title}</div>
                <div className="works__type">{type}</div>
                </Link>
            {/* {isLined && <img className="line" src={WaveLine} alt="Line" />} */}
            {isLined && <div className="line"></div>}
        </div>
    );
}

export default WorksElem;
