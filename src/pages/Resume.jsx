import Footer from '../components/Footer';

export default function Resume() {
  return (
    <div id="resume">
      <h1>Resume</h1>
      <p>
        Download Resume <a href="">Link</a>
      </p>
      <h4>Front-End proficiencies</h4>
      <ul className='resume-list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstap</li>
      </ul>
      <h4>Back-End proficiencies</h4>
      <ul className='resume-list'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      <div>
        <Footer />
      </div>
    </div>
  );
}
