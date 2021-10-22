import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserProfile.css';

export const UserProfile = () => {
    return (
        <section className="UserProfileWrapper">
            <div className="userDisplayBlock">
                <span className="userName">Raviteja V</span>
                <p className="links">
                    <a href="mailto:raviteja99866@gmail.com" className="mail" rel="noreferrer" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.linkedin.com/in/raviteja-v-312567148/" target="_blank" rel="noreferrer" className="linkedin ">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/ravitejav/" target='_blank' rel="noreferrer" className="github ">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </p>
                <p className="info">Fornt End Developer with 2 years of Experience in building responsive, Performant and SEO driven web Applications. Skilled in ReactJS, React Native, Redux. Hands on Experience with Jenkins.</p>
                <div className="downloadResume button" onClick={() => {}}>Download Resume</div>
            </div>
        </section>
    );
}
