export default function Footer() {
  const styles = {
    img: {
      width: '60px',
      margin: '5px',
    },
  };

  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a href="https://github.com/Josh-Manley" target="blank">
          <img style={styles.img} src="/assets/github-logo.png" alt="github icon" />
        </a>
      </li>
      <li className="nav-item">
        <a href="">
          <img style={styles.img} src="/assets/LinkedIn-logo.png" alt="linkedin logo" />
        </a>
      </li>
    </ul>
  );
}