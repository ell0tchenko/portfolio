import Agroland from "../assets/images/works-mcagroland.png"
import WorksImg from "../assets/images/shape-works.png"
import WorksElem from "../components/WorksElem";

const Works = () => {
    return (
        <div className="works">
            <img className="photo" src={Agroland} alt="Branding cup MC Agroland" />
            <div className="works__container--right">
                <h1>WORKS</h1>
                <div className="works__table">
                    <WorksElem title="saving the princess" type="web development" isLined={true} />
                    <WorksElem title="cathub" type="web development" isLined={true} />
                    <WorksElem title="mc agroland" type="brading" isLined={true} />
                    <WorksElem title="air fun store" type="brading" isLined={true} />
                    <WorksElem title="shanny" type="brading" isLined={false} />
                </div>
            </div>
            <img className="shape image--right" src={WorksImg} alt="Decorative shape" />
        </div>
    );
}

export default Works;