import Project from '../components/Project';

const Portfolio = () => {
  const handleProjectClick = deployed => {
    <link></link>;
    // You can perform any action based on the clicked project title
    // For example, open a modal, navigate to a detail page, etc.
  };

  const projects = [
    {
      title: 'Dad Jest Mail',
      imageUrl: '/assets/Screenshot of DadJestMail.png',
      iconUrl: '/assets/github-logo.png',
      deployedUrl: 'https://josh-manley.github.io/DadJestMail/',
      gitHubUrl: 'https://github.com/Josh-Manley/DadJestMail',
    },
    {
      title: 'Timetracker3000',
      imageUrl: '/assets/Timetracker-screenshot.png',
      iconUrl: '/assets/github-logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: 'Weather Dashboard',
      imageUrl: '/assets/Screenshot of Weather Dashboard.png',
      iconUrl: '/assets/github-logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: '',
      imageUrl: 'project1.jpg',
      iconUrl: '/assets/github-logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: '',
      imageUrl: 'project1.jpg',
      iconUrl: '/assets/github-logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: '',
      imageUrl: 'project1.jpg',
      iconUrl: '/assets/github-logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className='d-flex flex-wrap mb-3'>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            iconUrl={project.iconUrl}
            deployedUrl={project.deployedUrl}
            gitHubUrl={project.gitHubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
