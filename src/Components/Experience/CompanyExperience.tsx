import { IndependentExperiences } from 'Interfaces/ExperienceModal';
import { isArray } from 'util';
import { exportToMonthFormat } from "../../Utils/CommonHelper";
import './companyExp.css';

export const CompanyExperience = ({ work, closePopUp, companyName }: { work: Array<IndependentExperiences>, closePopUp: any, companyName: string }) => {
    return (
        <section className="companyExpWrapper center">
            <div className="indExp">
                <div className="workExp">
                    <h3>{companyName}</h3>
                    <span className="button" onClick={closePopUp}>&#10005;</span>
                </div>
                <div className="work">
                    {work.map((indExp: IndependentExperiences, i: number) => (
                        <div className="experiences">
                            <div className="role">
                                <span className="round"></span>
                                <div className="details">
                                    <span>{indExp.position}</span>
                                    <span>{`${exportToMonthFormat(indExp.from)} - ${exportToMonthFormat(indExp.to)}`}</span>
                                </div>
                            </div>
                            <div className="desc">
                                {isArray(indExp.workExperience) ? (
                                    <ul>
                                        {indExp.workExperience.map((desc: string, i: number) => (
                                            <li>{desc}</li>
                                        ))}
                                    </ul>
                                ) : indExp.workExperience}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}