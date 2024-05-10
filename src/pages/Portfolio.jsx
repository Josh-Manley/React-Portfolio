
import Project from '../components/Project'

const Portfolio = () => {
  const handleProjectClick = (deployed) => {
    <link></link>
    // You can perform any action based on the clicked project title
    // For example, open a modal, navigate to a detail page, etc.
  };

  const projects = [
    {
      title: 'Dad Jest Mail',
      imageUrl: '',
      iconUrl: '../assets/github-logo.png'
    },
    {
      title: 'Timetracker3000',
      imageUrl: 'project2.jpg',
      iconUrl: '../assets/github-logo.png'
    },
    {
      title: 'Dad Jest Mail',
      imageUrl: 'project1.jpg',
      iconUrl: '../assets/github-logo.png'
    },{
      title: 'Dad Jest Mail',
      imageUrl: 'project1.jpg',
      iconUrl: '../assets/github-logo.png'
    },{
      title: 'Dad Jest Mail',
      imageUrl: 'project1.jpg',
      iconUrl: '../assets/github-logo.png'
    },{
      title: 'Dad Jest Mail',
      imageUrl: 'project1.jpg',
      iconUrl: '../assets/github-logo.png'
    },
    // Add more project objects as needed
  ];
}

return (
  <div>
    <h1>Portfolio</h1>
    <div>
      {projects.map((project, index) => (
        <Project 
        key={index}
        title={project.title}
        imageUrl={project.imageUrl}
        iconUrl={project.iconUrl}
        onClick={}
        />
      ))}
    </div>
  </div>
)