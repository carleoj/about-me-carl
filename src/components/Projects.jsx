import dsProj from '../assets/dsfinal2.png';
import loginsys from '../assets/loginsys.png';
import skeleton from '../assets/skeleton.png';
import svgAnimations from '../assets/svg-animations.png';
import Project from './Project.jsx';
const projectList = [
    {
      id: 1,
      title: 'Digital Library Book Lending System (2024)',
      tech: ['C', 'SQLite','Database'],
      description:
        'This served as my final project in our Data Structures class, this project is about book reservations, and records management with file-based database.',
      liveLink: '#',
      githubLink: '#',
      image: dsProj,
    },
    {
      id: 2,
      title: 'Secured Basic Login System(2024)',
      tech: ['HTML', 'CSS','PHP'],
      description:
        'My final project presented in our Information Management class. This demonstrates how the secured login system works with encryption and web session.',
      liveLink: '#',
      githubLink: '#',
      image: loginsys,
    },
    {
      id: 3,
      title: 'Soon to be implemented',
      tech: ['HTML', 'CSS', 'JavaScript','MySQL'],
      description: "My project from Web Programming class.",
      liveLink: '#',
      githubLink: '#',
      image: skeleton,
    },
    {
      id: 4,
      title: 'Soon to be implemented',
      tech: ['HTML', 'CSS','Javascript','NoSQL'],
      description:
        'My project from Advanced DBMS class.',
      liveLink: '#',
      githubLink: '#',
      image: skeleton,
    },
  ];
const Projects = () => {
  return (
    <section id='projects'className='divider'>
        <h2>My Projects</h2>
        <div>
            {projectList.map((project, i) => (
                <Project key={project.id} data={project} reverse={i % 2 === 0}/>
        ))}
        </div>
    </section>
  )
}

export default Projects