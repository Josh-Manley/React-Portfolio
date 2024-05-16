const Project = ({ title, imageUrl, iconUrl, deployedUrl, gitHubUrl }) => {
  const styles = {
    img: {
      width: '100%',
      height: '60vh',
      position: 'relative',
      borderRadius: '2%',
    },

    icon: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'white',
      borderRadius: '50%',
    },
    a: {
      textDecoration: 'none',
      color: 'black',
    },
  };

  return (
    <div className="position-relative">
      <img className="border border-2 border-black" style={styles.img} src={imageUrl} alt={title} />
      <div className="overlay">
        <a style={styles.a} href={deployedUrl}>
          {title}
        </a>
      </div>
      <a href={gitHubUrl} style={styles.icon}>
        <img src={iconUrl} alt="GitHub Icon" width="30" />
      </a>
    </div>
  );
};

export default Project;
