import Project from '../components/Project';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

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
      iconUrl: '/assets/logo.png',
      deployedUrl: 'https://josh-manley.github.io/DadJestMail/',
      gitHubUrl: 'https://github.com/Josh-Manley/DadJestMail',
    },
    {
      title: 'Timetracker3000',
      imageUrl: '/assets/Timetracker-screenshot.png',
      iconUrl: '/assets/logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: 'Weather Dashboard',
      imageUrl: '/assets/Screenshot of Weather Dashboard.png',
      iconUrl: '/assets/logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: '',
      imageUrl: 'project1.jpg',
      iconUrl: '/assets/logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: '',
      imageUrl: 'project1.jpg',
      iconUrl: '/assets/logo.jpg',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: '',
      imageUrl: 'project1.jpg',
      iconUrl: '/assets/logo.jpg',
      deployedUrl: '',
      gitHubUrl: '',
    },
    // Add more project objects as needed
  ];

  
  return (
    <Container>
      <h1 className="text-center my-4 portfolio-txt">Portfolio</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} lg={6} className="mb-4">
            <Project
              title={project.title}
              imageUrl={project.imageUrl}
              iconUrl={project.iconUrl}
              deployedUrl={project.deployedUrl}
              gitHubUrl={project.gitHubUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
