import { useParams } from 'react-router-dom';
import STP_1 from '../assets/images/STP_project/Screenshot_1.png'
import STP_2 from '../assets/images/STP_project/Screenshot_2.png'
import STP_3 from '../assets/images/STP_project/Screenshot_3.png'
import STP_4 from '../assets/images/STP_project/Screenshot_4.png'
import STP_5 from '../assets/images/STP_project/Screenshot_5.png'
import STP_6 from '../assets/images/STP_project/Screenshot_6.png'
import STP_7 from '../assets/images/STP_project/Screenshot_7.png'
import CH_1 from '../assets/images/CH_project/Screenshot_1.png'
import CH_2 from '../assets/images/CH_project/Screenshot_2.png'
import CH_3 from '../assets/images/CH_project/Screenshot_3.png'
import CH_4 from '../assets/images/CH_project/Screenshot_4.png'
import CH_5 from '../assets/images/CH_project/Screenshot_5.png'
import MCA_1 from '../assets/images/MCA_project/mc1.png'
import MCA_2 from '../assets/images/MCA_project/mc2.png'
import MCA_3 from '../assets/images/MCA_project/mc3.png'
import MCA_4 from '../assets/images/MCA_project/mc4.png'
import MCA_5 from '../assets/images/MCA_project/mc5.png'
import MCA_6 from '../assets/images/MCA_project/mc6.png'
import MCA_7 from '../assets/images/MCA_project/mc7.png'
import MCA_8 from '../assets/images/MCA_project/mc8.png'
import MCA_9 from '../assets/images/MCA_project/mc9.png'
import MCA_10 from '../assets/images/MCA_project/mc10.png'
import MCA_11 from '../assets/images/MCA_project/mc11.png'
import MCA_12 from '../assets/images/MCA_project/mc12.png'
import MCA_13 from '../assets/images/MCA_project/mc13.png'

const projects = {
    "saving-the-princess": {
        title: "Save the Princess",
        category: "web development",
        year: "2023",
        description: "Saving the Princess is a captivating JavaScript game that offers a whimsical adventure where players rescue a spirited princess from her stepmother's schemes. With Tetris-style gameplay and an action-packed storyline, players overcome challenges to save the day.",
        photos: [STP_1, STP_2, STP_3, STP_4, STP_5, STP_6, STP_7],
        demotext: "Try on GitHub",
        demolink: "https://github.com/ell0tchenko/Saving-the-Princess"
    },
    "cathub": {
        title: "Cathub",
        category: "web development",
        year: "2023",
        description: "CatHub is a universal platform designed for communication, post sharing, socializing, and fostering interactions among users, among other functionalities. Its frontend is developed using Next.js, while the backend is powered by Golang.",
        photos: [CH_1, CH_2, CH_3, CH_4, CH_5],
        demotext: "Try on GitHub",
        demolink: "https://github.com/ell0tchenko/Cat-Hub"
    },
    "mc-agroland": {
        title: "MC Agroland",
        category: "branding",
        year: "2020",
        description: "MK AGROLAND is engaged in the cultivation and sale of agricultural products. The aim of this project is to develop a corporate identity that would distinguish it from others, forming an image and at the same time showing the main mission.",
        photos: [MCA_1, MCA_2, MCA_3, MCA_4, MCA_5, MCA_6, MCA_7, MCA_8, MCA_9, MCA_10, MCA_11, MCA_12, MCA_13],
        demotext: "See more on Behance",
        demolink: "https://www.behance.net/gallery/115399691/MKAGROLAND-Corporate-identity"
    },
    "air-fun-store": {
        title: "Air Fun Store",
        category: "branding",
        year: "2023",
        description: "Description of Project 4",
        photos: [],
        demotext: "See more on Behance",
        demolink: "https://www.behance.net/gallery/130894419/AIR-FAN-STORE-Brand-Identity"
    },
    "shanny": {
        title: "Shanny",
        category: "branding",
        year: "2023",
        description: "Description of Project 5",
        photos: [],
        demotext: "See more on Behance",
        demolink: "https://www.behance.net/gallery/124450333/Shanny-(konditerska)-Brand-ID"
    },
};

const Project = () => {
    let { projectName } = useParams();
    const project = projects[projectName];

    if (!project) {
        return <div>Project not found</div>;
    }

    document.body.style.overflow = 'auto';
    let content = document.getElementById("content");
    if (content) {
        content.style.alignItems = "flex-start";
    }

    return (
        <div className='project'>
            <h1 id='project-h1'>{project.title}</h1>
            <div className="project__container">
                <div className="project__category">
                    <p className='project-p'>category</p>
                    <p className='project-p'>year</p>
                </div>
                <div className="project__values">
                    <p>{project.category}</p>
                    <p>{project.year}</p>
                </div>
                <div className="project__content">
                    <p>{project.description}</p>
                    <a className='button blue' href={project.demolink} target='_blank' rel="noreferrer">{project.demotext}</a>
                </div>
            </div>
            {project.photos.map((photo, index) => (
                <img className='photo' key={index} src={photo} alt={`Project's screenshot ${index + 1}`} loading="lazy" />
            ))}
            <button className='button red'>next project</button>
        </div>
    );
};

export default Project;