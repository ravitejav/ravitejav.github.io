import { Intro } from "Components/Intro";
import { Skills } from "Components/Skills";
import { Experience } from "Components/Experience";
import { Projects } from "Components/Projects";


const Home = () => {
    
    return (
        <main style={{ backgroundColor: '#232323' }}>
            <Intro />
            <Skills />
            <Experience />
            <Projects />
        </main>
    );
}

export default Home;