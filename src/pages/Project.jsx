import { useParams, Link } from 'react-router-dom';
import ProjectImg from '../assets/images/shape-project.png';
import { Projects } from "../data/data.js"




const Project = () => {
    let { projectName } = useParams();
    const project = Projects[projectName];

    if (!project) {
        return <div>Project not found</div>;
    }
    document.body.style.overflow = 'auto';

    return (
        <div className='project'>
            <img className="shape image--right" src={ProjectImg} alt="Decorative shape" />
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
                <img className='photo project__image' key={index} src={photo} alt={`Project's screenshot ${index + 1}`} loading="lazy" />
            ))}
            <Link to="/works" id='project__button' className='button red'>back to works</Link>
        </div>
    );
};

export default Project;