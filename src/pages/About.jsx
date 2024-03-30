import MyImg from "../assets/images/my-img.png"
import AboutImg from "../assets/images/shape-about.png"

const About = () => {
    return (
        <div className="about">
            <h1>ABOUT</h1>
            <p>I'm on a mission to make the web more beautiful and user-friendly place. Whether it's creating engaging visuals or coding responsive websites, I enjoy combining creativity and functionality in my work.</p>
            <p>In my spare time I love reading interactive novels, playing cooperative games with my friends, and making earrings. I also have a little rabbit Tamagotchi. I hope that one day I'll be able to take care of a real pet.</p>
            <button className="icon-button">resume</button>
            <button>github</button>
            <button>linkedin</button>
            <button>behance</button>
            <img src={MyImg} alt="Me in the forest" />
            <img src={AboutImg} alt="Decorative shape" />
        </div>
    );
}

export default About;