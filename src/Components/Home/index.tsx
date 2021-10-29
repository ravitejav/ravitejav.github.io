import './Home.css';
// import { NavBar } from "../NavBar";
import { UserProfile} from "../UserProfile";
import { Skills } from '../UserProfile/Skills';
import { Experience } from '../Experience';
import { Projects } from '../Projects';
import { SocialMediaProfiles } from '../SocialMediaProfiles';


const Home = () => {
    return (
        <main className="HomepageWrapper">
            {/* <NavBar /> */}
            <UserProfile />
            <Skills />
            <Experience />
            <Projects />
            <SocialMediaProfiles />
        </main>
    )
}

export default Home;