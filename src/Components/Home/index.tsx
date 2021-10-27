import './Home.css';
// import { NavBar } from "../NavBar";
import { UserProfile} from "../UserProfile";
import { Skills } from '../UserProfile/Skills';
import { Experience } from '../Experience';
import { Projects } from '../Projects';


const Home = () => {
    return (
        <main className="HomepageWrapper">
            {/* <NavBar /> */}
            <UserProfile />
            <Skills />
            <Experience />
            <Projects />
        </main>
    )
}

export default Home;