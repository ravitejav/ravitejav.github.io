import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skill } from '../../Interfaces/Skills';
import { skillSet } from '../../Utils/Constants';
import './Skills.css';


export const Skills = () => {
    return (
        <section className="skillsWrapper">
            <h2>Skills</h2>
            <div className="skillsBlock">
                {skillSet.map((skill: Skill, i: number) => (
                    <span className="skill">
                        <FontAwesomeIcon icon={skill.icon} />
                        <span key={i}>{skill.name}</span>
                    </span>
                ))}
            </div>
        </section>
    );
}