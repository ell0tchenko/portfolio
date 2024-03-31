import { Link } from 'react-router-dom';
import HomeImg from '../assets/images/shape-home.png'

const Home = () => {
    return (
        <div className="home">
            <img className='shape image--left' src={HomeImg} alt="Decorative shape" />
            <p id="p1">Hey there! My name is</p>
            <h1>ELINA OTCHENKO</h1>
            <p id="p2">I'm a graphic designer, UX/UI designer and front-end web developer.</p>
            <p id="p3">From wireframes to code, I bring ideas to life to create unforgettable digital experiences.</p>
            <div className='button__container'>
                <Link className='button blue' to="/works">see my projects</Link>
                <Link className='button blue' to="/about">more about me</Link>
            </div>
        </div>
    );
}

export default Home;