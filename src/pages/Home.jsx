import HomeImg from '../assets/images/shape-home.png'

const Home = () => {
    return (
        <div className="home">
            <img className='image' src={HomeImg} alt="Decorative shape" />
            <p id="p1">Hey there! My name is</p>
            <h1>ELINA OTCHENKO</h1>
            <p id="p2">I'm a graphic designer, UX/UI designer and front-end web developer.</p>
            <p id="p3">From wireframes to code, I bring ideas to life to create unforgettable digital experiences.</p>
            <div>
                <button className='icon-button'>see my projects</button>
                <button className='icon-button'>more about me</button>
            </div>
        </div>
    );
}

export default Home;