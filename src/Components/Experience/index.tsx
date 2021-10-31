import { ExperienceModal } from 'Interfaces/ExperienceModal';
import { Experiences } from 'Utils/Constants';
import './experience.css';

export const Experience = () => {
    return (
        <section className="experience">
            <div className="exptitle">
                <h2>Experience</h2>
                <span className="tintLine"></span>
            </div>
            <div className="experiences">
                {Experiences.map((exp: ExperienceModal, i: number) => (
                    <div className="exp">
                        <div className="designation">
                            <span className="imgWrapper center"><img src={exp.imageUrl} /></span>
                            <span>
                                <h3>{exp.companyName}</h3>
                                <span>{exp.isCurrent ?  'Current' : exp.totalExperience}</span>
                            </span>
                        </div>
                        <div className="desc">
                            {exp.desc}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}