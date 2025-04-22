import { useParams, Link } from 'react-router-dom';
import ProjectShape from '../assets/images/shape-project.png';
import { Projects } from "../data/data.js"


const extractYoutubeVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n?#]+)/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
};

const Project = () => {
    let { projectName } = useParams();
    const project = Projects[projectName];

    if (!project) {
        return <div>Project not found</div>;
    }
    document.body.style.overflow = 'auto';

    return (
        <div className='project'>
            <img className="shape image--right" src={ProjectShape} alt="Decorative shape" />
            <h1 id='project-h1'>{project.title}</h1>
            <div className="project__container">
                <div className="project__category">
                    <p className='project-p'>Category</p>
                    <p className='project-p right-text'>Year</p>
                </div>
                <div className="project__values">
                    <p >{project.category}</p>
                    <p className='right-text'>{project.year}</p>
                </div>
                <div className="project__content">
                    <p>{project.description}</p>
                    <a className='button' href={project.demolink} target='_blank' rel="noreferrer">{project.demotext}</a>
                </div>
            </div>
            {project.photos.map((photo, index) => (
                <img className='photo project__image' key={index} src={photo} alt={`Project's screenshot ${index + 1}`} loading="lazy" />
            ))}
            {project.video && (
                <div className="project__video">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${extractYoutubeVideoId(project.video)}`} 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
            )}
            <Link to="/works" id='project__button' className='button'>BACK TO WORKS</Link>
        </div>
    );
};

export default Project;