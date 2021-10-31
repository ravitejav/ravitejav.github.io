import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OtherProfile } from 'Interfaces/OtherProfile';
import { OtherProfiles } from 'Utils/Constants';
import './otherProfiles.css';

export const OtherProfileComp = () => {
    return (
        <section className="otherProfiles">
            <div className="otherProfilesTitle">
                <h2>Other Profiles</h2>
                <span className="tintLine"></span>
            </div>
            <div className="profiles">
                {OtherProfiles.map((profile: OtherProfile, i: number) => (
                    <a href={profile.url} target="_blank" rel="noreferrer" className="center">
                        <FontAwesomeIcon icon={profile.icon} />
                        {profile.name}
                    </a>
                ))}
            </div>
        </section>
    );
}