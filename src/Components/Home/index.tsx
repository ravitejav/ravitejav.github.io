import './Home.css';
import { NavBar } from "../NavBar";
import { UserProfile} from "../UserProfile";
import { Skills } from '../UserProfile/Skills';
import { Experience } from '../Experience';

const Home = () => {
    return (
        <main className="HomepageWrapper">
            <NavBar />
            <UserProfile />
            <Skills />
            <Experience />
        </main>
    )
}

export default Home;