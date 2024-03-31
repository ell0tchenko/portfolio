import WaveLine from "../assets/images/wave-line.svg"
import { Link } from "react-router-dom";

const WorksElem = ({ title, type, isLined }) => {
    return (
        <div>
            <div className="works-elem__container">
                <Link to={`/works/${title.replace(/\s+/g, '-')}`} className="works__title button red">{title}</Link>
                <div className="works__type">{type}</div>
            </div>
            {isLined && <img className="line" src={WaveLine} alt="Line" />}
        </div>
    );
}

export default WorksElem;