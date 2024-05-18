import Project from '../components/Project';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import Footer from '../components/Footer';

const Portfolio = () => {
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
      gitHubUrl: 'https://github.com/amandrews09/production',
    },
    {
      title: 'Weather Dashboard',
      imageUrl: '/assets/Screenshot of Weather Dashboard.png',
      iconUrl: '/assets/logo.png',
      deployedUrl: '',
      gitHubUrl: '',
    },
    {
      title: 'Tech Blog',
      imageUrl: '/assets/Tech blog.png',
      iconUrl: '/assets/logo.png',
      deployedUrl: 'https://tech-blog-josh-aa625d499f0d.herokuapp.com/',
      gitHubUrl: 'https://github.com/Josh-Manley/Tech-Blog?tab=readme-ov-file',
    },
    {
      title: 'Note Taker',
      imageUrl: '/assets/note taker.png',
      iconUrl: '/assets/logo.png',
      deployedUrl: 'https://note-taker-sf6a.onrender.com',
      gitHubUrl: 'https://github.com/Josh-Manley/Note-Taker',
    },
    {
      title: 'Work Day Scheduler',
      imageUrl: '/assets/work day scheduler.png',
      iconUrl: '/assets/logo.png',
      deployedUrl: 'https://josh-manley.github.io/Work-Day-Scheduler/',
      gitHubUrl: 'https://github.com/Josh-Manley/Work-Day-Scheduler',
    },
    // Add more project objects as needed
  ];

  return (
    <Container>
      <h1 className="text-center my-5 portfolio-txt border-bottom border-dark pb-3">Portfolio</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} lg={6} className="mb-3">
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
      <div>
        <Footer />
      </div>
    </Container>
  );
};

export default Portfolio;
