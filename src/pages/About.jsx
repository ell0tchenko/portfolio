import MyImg from "../assets/images/my-img.png"
import AboutImg from "../assets/images/shape-about.png"

const About = () => {
    document.body.style.overflow = 'auto';
    return (
        <div className="about">
            <div className="about__container--left">
                <h1>ABOUT</h1>
                <p>I'm on a mission to make the web more beautiful and user-friendly place. Whether it's creating engaging visuals or coding responsive websites, I enjoy combining creativity and functionality in my work.</p>
                <p>In my spare time I love reading interactive novels, playing cooperative games with my friends, and making earrings. I also have a little rabbit Tamagotchi. I hope one day I'll be able to take care of a real pet.</p>
                <div className="button__container">
                    <a className="button blue" href="CV Elina Otchenko.pdf" download='CV Elina Otchenko.pdf'>resume</a>
                    <a className="button blue" href="https://github.com/ell0tchenko" target="_blank" rel="noreferrer">github</a>
                    <a className="button blue" href="https://www.linkedin.com/in/elinaotchenko/" target="_blank" rel="noreferrer">linkedin</a>
                    <a className="button blue" href="https://www.behance.net/elinaotchenko" target="_blank" rel="noreferrer">behance</a>
                </div>
            </div>
            <img className="photo" id="my-image" src={MyImg} alt="Me in the forest" />
            <img className='shape image--right' src={AboutImg} alt="Decorative shape" />
        </div >
    );
}

export default About;