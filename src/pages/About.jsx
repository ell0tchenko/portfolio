import MyImg from "../assets/images/my-img.png"
import AboutImg from "../assets/images/shape-about.png"

const About = () => {
    document.body.style.overflow = 'auto';
    return (
        <div className="about">
            <div className="about__container--left">
                <h1>ABOUT</h1>
                <p>I'm on a mission to make the web more beautiful and user-friendly place. 
                    Whether it's creating engaging visuals or coding responsive websites, 
                    I enjoy combining creativity and functionality in my work.</p>
                <p>In my free time, you’ll often find me tending to my little windowsill garden, 
                    experimenting with new dessert recipes, or teaming up with friends in cooperative board games. 
                    These moments of creativity and connection outside of work help  keep my ideas fresh and 
                    grounded in real human experience.</p>
                <p>Let’s build something thoughtful together.</p>
                <div className="button__container">
                    <a className="button blue" href="CV Elina Otchenko Designer.pdf" target="_blank" rel="noreferrer">CV</a>
                    <a className="button blue" href="https://www.behance.net/elinaotchenko" target="_blank" rel="noreferrer">BEHANCE</a>
                    <a className="button blue" href="https://www.linkedin.com/in/elinaotchenko/" target="_blank" rel="noreferrer">LINKEDIN</a>
                    <a className="button blue" href="https://github.com/ell0tchenko" target="_blank" rel="noreferrer">GITHUB</a>
                </div>
            </div>
            <img className="photo" id="my-image" src={MyImg} alt="Me in the forest" />
            <img className='shape image--right' src={AboutImg} alt="Decorative shape" />
        </div >
    );
}

export default About;