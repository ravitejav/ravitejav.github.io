import './Home.css';
import { NavBar } from "../NavBar";
import { UserProfile} from "../UserProfile";

const Home = () => {
    return (
        <main className="HomepageWrapper">
            <NavBar />
            <UserProfile />
        </main>
    )
}

export default Home;