import { Project } from '../../Interfaces/Projects';
import { personalProjects } from '../../Utils/Constants';
import './personalProject.css';

export const PersonalProjects = () => {

    return (
        <div className="PersonalProjectsWrapper">
            <h2>Projects</h2>
            <div className="personalProjects">
                <ul>
                    {personalProjects().map((project: Project, i: number) => (
                        <li className="projectBlock" key={i}>
                            <h3>
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noreferrer">{project.projectName}</a>
                                ): (
                                    project.projectName
                                )}
                                </h3>
                            <div className="otherdetails">
                                <p className="desc">{project.desc}</p>
                                <ul>
                                    {project.technologies.map((tech: string) => (
                                        <li>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}