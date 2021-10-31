import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skill } from 'Interfaces/Skills';
import { skillSet } from 'Utils/Constants';
import './skills.css';

export const Skills = () => {
    return (
        <section className="skills center">
            <h2 className="skilltitle">Skills</h2>
            <span className="tintLine"></span>
            <div className="skillList center">
            {skillSet.map((skill: Skill, i: number) => (
                <div className="skill center">
                    <FontAwesomeIcon icon={skill.icon} />
                    <span>{skill.name}</span>
                </div>
            ))}
            </div>
        </section>
    );
}