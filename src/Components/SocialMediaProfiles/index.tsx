import './OtherProfile.css';
import { OtherProfiles } from "../../Utils/Constants";
import { OtherProfile } from '../../Interfaces/OtherProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialMediaProfiles = () => {
    return (
        <section className="otherProfileWrapper">
            <h2>Other Profiles</h2>
            <div className="profiles">
                {OtherProfiles.map((profile: OtherProfile) => (
                    <a className="profile" href={profile.url} target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={profile.icon} />
                        {profile.name}
                    </a>
                ))}
            </div>
        </section>
    )
}