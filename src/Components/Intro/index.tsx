import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './intro.css';

export const Intro = () => {
    return (
        <section className="introWrapper">
            <div className="intro">
                <p className="greeting">Hi, my name is,</p>
                <span className="tintLine"></span>
                <span className="name">Raviteja.</span>
                <p className="introInfo">Fornt End Developer with 2 years of Experience in building responsive, Performant and SEO driven web Applications. Skilled in ReactJS, React Native, Redux. Hands on Experience with Jenkins.</p>
                <div className="links">
                    <a href="mailto:raviteja99866@gmail.com" className="mail center">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.linkedin.com/in/raviteja-v-312567148/" target="_blank" rel="noreferrer" className="linkedin center">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.linkedin.com/in/raviteja-v-312567148/" target="_blank" rel="noreferrer" className="github center">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                </div>
                <span className="downloadResume button">
                    <FontAwesomeIcon icon={faDownload} />
                    Download Resume
                </span>
            </div>
        </section>
    );
}