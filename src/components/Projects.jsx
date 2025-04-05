import dsProj from '../assets/dsfinal2.png';
import loginsys from '../assets/loginsys.png';
import spaclibsys from '../assets/spaclibsys.png'
import spaclibsys2 from '../assets/spaclibsys2.png'
import skeleton from '../assets/skeleton.png';
import svgAnimations from '../assets/svg-animations.png';
import Project from './Project.jsx';
const projectList = [
    {
      id: 1,
      title: 'Digital Library Book Lending System (2024)',
      tech: ['C', 'SQLite'],
      description:
        'This served as my final project in our Data Structures class, this project is about book reservations, and records management with file-based database.',
      liveLink: '#',
      githubLink: 'https://github.com/carleoj/ds_finalproject',
      gdriveLink: '#',
      image: dsProj,
    },
    {
      id: 2,
      title: 'Secured Basic Login System (2024)',
      tech: ['HTML', 'CSS', 'PHP', 'JavaScript'],
      description:
        'My final project presented in our Information Management class. This demonstrates how the secured login system works with encryption and web session.',
      liveLink: '#',
      githubLink: 'https://github.com/carleoj/imweb/tree/main/CSWeb',
      gdriveLink: '#',
      image: loginsys,
    },
    {
      id: 3,
      title: 'Library Printing Services System (2024)',
      tech: ['React', 'NodeJS', 'Express', 'MySQL'],
      description: "Our group project from Software Engineering class.",
      liveLink: '#',
      githubLink: 'https://github.com/carleoj/softeng-libsys',
      gdriveLink: '',
      image: spaclibsys2,
    },
    {
      id: 4,
      title: 'Dorcas: An Online Counseling App (2024)',
      tech: ['React', 'NodeJS', 'Express', 'MySQL',],
      description:
        'Our group project from Human-Computer Interaction class.',
      liveLink: '#',
      githubLink: '#',
      image: skeleton,
    },
    {
      id: 5,
      title: 'Soon to be Implemented',
      tech: ['React', 'NodeJS', 'Express', 'MongoDB',],
      description:
        'Our group project from Advanced Database Systems class.',
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
