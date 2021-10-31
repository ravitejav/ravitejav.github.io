import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personalProjects } from 'Utils/Constants';
import { Project } from "../../Interfaces/Projects";
import './projects.css';

export const Projects = () => {
    return (
        <section className="projectWrapper">
            <div className="projectTitle">
                <h2>Projects</h2>
                <span className="tintLine"></span>
            </div>
            <div className="projects center">
                {personalProjects().map((project: Project, i: number) => (
                    <div className="project center" key={i}>
                        <img src={project.imageUrl} alt={project.projectName} />
                        <div className="projectDetails center">
                            <h2>{project.projectName}</h2>
                            <div className="otherDetails center">
                                {project.url ?  (
                                    <a href={project.url} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLink} /> Visit
                                    </a>
                                ) : null}
                                <div className="techs">
                                    {project.technologies.map((tech: string, j: number) => (
                                        <span className="techname" key={j}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}