import { ExperienceModal, IndependentExperiences } from 'Interfaces/ExperienceModal';
import { useState } from 'react';
import { Experiences } from 'Utils/Constants';
import { CompanyExperience } from './CompanyExperience';
import './experience.css';

export const Experience = () => {

    const [showExp, setShowExp] = useState(false);
    const [work, setWork] = useState([] as Array<IndependentExperiences>);
    const [companyName, setCompanyName] = useState('' as string);

    const showPopUp = (exp: ExperienceModal) => {
        setShowExp(true);
        setWork(exp.work);
        setCompanyName(exp.companyName)
    }

    return (
        <section className="experience">
            <div className="exptitle">
                <h2>Experience</h2>
                <span className="tintLine"></span>
            </div>
            <div className="experiences">
                {Experiences.map((exp: ExperienceModal, i: number) => (
                    <div className="exp" data-title={`click to view experiences in ${exp.companyName}`} onClick={() => showPopUp(exp)} key={i}>
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
            {showExp && (<CompanyExperience closePopUp={() => setShowExp(false)} work={work} companyName={companyName} />)}
        </section>
    );
}