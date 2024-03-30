import WaveLine from "../assets/images/wave-line.svg"
import { Link } from "react-router-dom";

const WorksElem = ({ title, type, isLined }) => {
    return (
        <div className="works-element">
            <Link to={`/works/${title.replace(/\s+/g, '-')}`} className="works-title">{title}</Link>
            <div className="works-type">{type}</div>
            {isLined && <img src={WaveLine} alt="Line" />}
        </div>
    );
}

export default WorksElem;