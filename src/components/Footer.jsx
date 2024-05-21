export default function Footer() {
  const styles = {
    img: {
      width: '60px',
      margin: '5px',
    },
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <ul style={styles.background} className="nav">
        <li className="nav-item">
          <a href="https://github.com/Josh-Manley" target="blank">
            <img style={styles.img} src="/assets/logo.png" alt="github icon" />
          </a>
        </li>
        <li className="nav-item">
          <a href="">
            <img style={styles.img} src="/assets/LinkedIn-logo.png" alt="linkedin logo" />
          </a>
        </li>
      </ul>
      <p>made by Josh</p>
    </div>
  );
}
