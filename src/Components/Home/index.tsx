import './Home.css';
import { NavBar } from "../NavBar";
import { UserProfile} from "../UserProfile";
import { Skills } from '../UserProfile/Skills';

const Home = () => {
    return (
        <main className="HomepageWrapper">
            <NavBar />
            <UserProfile />
            <Skills />
        </main>
    )
}

export default Home;