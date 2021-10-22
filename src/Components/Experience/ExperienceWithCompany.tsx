import { ExperienceModal, IndependentExperiences } from '../../Interfaces/ExperienceModal';
import { exportToMonthFormat } from "../../Utils/CommonHelper";
import './experienceWithCompany.css';

interface ExperienceWithCompanyPropType {
    experience: ExperienceModal,
}
export const ExperienceWithCompany = (props: ExperienceWithCompanyPropType) => {
    const { experience } = props;
    return (
        <section className="experienceWithCompany">
            <div className="heading">
                <img src={experience.imageUrl} loading="lazy" alt={experience.companyName} />
                <div className="companyDetails">
                    <h3>{experience.companyName}</h3>
                    <p>{experience.totalExperience}</p>
                </div>
            </div>
            <div className="workExperience">
                {experience.work.map((work: IndependentExperiences) => (
                    <div className="individualExp">
                        <h3>{work.position}</h3>
                        <p className="time">{`${exportToMonthFormat(work.from, true)}-${exportToMonthFormat(work.to, true)}`}</p>
                        {Array.isArray(work.workExperience) ? (
                            <ul>
                                {work.workExperience.map((exp: string) => (
                                    <li>{exp}</li>
                                ))}
                            </ul>
                        ): (
                            <p>{work.workExperience}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
