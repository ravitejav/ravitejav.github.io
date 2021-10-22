import { ExperienceModal } from '../../Interfaces/ExperienceModal';
import { Experiences } from '../../Utils/Constants';
import './experience.css';
import { ExperienceWithCompany } from './ExperienceWithCompany';

export const Experience = () => {
    return (
        <section className="experienceWrapper">
            <h2>Experience</h2>
            {Experiences.map((experience: ExperienceModal, i: number) => (
                <ExperienceWithCompany experience={experience} key={i} />
            ))}
        </section>
    )
}