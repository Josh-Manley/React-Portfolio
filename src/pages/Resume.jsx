import Footer from '../components/Footer';

export default function Resume() {
  const styles = {
    h1: {
      marginBottom: '3vw',
      marginTop: '3vw',
      fontSize: '3rem'
    },
    h4: {
      fontSize: '2rem',
    },
  };

  return (
    <div id="resume">
      <h1 style={styles.h1}>Resume</h1>
      <p>
        Download Resume <a href="https://profile.indeed.com/p/joshm-hxu0gcz">Link</a>
      </p>
      <h4 style={styles.h4}>Front-End proficiencies</h4>
      <ul className="resume-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstap</li>
      </ul>
      <h4 style={styles.h4}>Back-End proficiencies</h4>
      <ul className="resume-list">
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
