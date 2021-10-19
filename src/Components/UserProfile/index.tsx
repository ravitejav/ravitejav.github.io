import './UserProfile.css';

export const UserProfile = () => {
    return (
        <section className="UserProfileWrapper">
            <div className="userDisplayBlock">
                <span className="userName">Raviteja V</span>
                <p className="info">Fornt End Developer with 2 years of Experience in building responsive, Performant and SEO driven web Applications. Skilled in ReactJS, React Native, Redux. Hands on Experience with Jenkins.</p>
                <div className="downloadResume button">Download Resume</div>
            </div>
        </section>
    );
}
