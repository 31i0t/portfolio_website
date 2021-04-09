import Projects from './projectsPage/Projects'
import Experience from './experiencePage/Experience'
import References from './referencesPage/References';
import Education from './educationPage/Education';


function Content() {
    return (
        <div id = "content">
            <Projects />
            <Experience />
            <References />
            <Education />
        </div>
    );
}

export default Content;
