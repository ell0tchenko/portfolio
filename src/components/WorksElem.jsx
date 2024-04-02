import { Link } from "react-router-dom";

const WorksElem = ({ title, type, isLined, onMouseOver, onMouseOut }) => {
    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <div className="works-elem__container">
                <Link to={`/works/${title.replace(/\s+/g, '-')}`} className="works__title button red">{title}</Link>
                <div className="works__type">{type}</div>
            </div>
            {/* {isLined && <img className="line" src={WaveLine} alt="Line" />} */}
            {isLined && <div className="line"></div>}
        </div>
    );
}

export default WorksElem;
