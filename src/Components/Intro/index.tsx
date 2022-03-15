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
                <p className="introInfo">I am working as an Application Developer 3 at Oracle with an overall Experience of 2.5+ years experience in FrontEnd Applications development. I'm Skilled in ReactJS, React Native, Angular, Javascript, Java and Spring Boot. Looking forward to working in a challenging environment.</p>
                <div className="links">
                    <a href="mailto:raviteja99866@gmail.com" className="mail center">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href="https://www.linkedin.com/in/ravitejav221b" target="_blank" rel="noreferrer" className="linkedin center">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/ravitejav/" target="_blank" rel="noreferrer" className="github center">
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
