const Project = ({ title, imageUrl, iconUrl, deployedUrl, gitHubUrl }) => {
  const styles = {
    img: {
      width: '100%',
      position: 'relative',
      borderRadius: '2%'
    },
    overlay: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '5px 10px',
      borderRadius: '5px',
    },
    icon: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'white',
      borderRadius: '50%'
    },
    a: {
      textDecoration: 'none',
      color: 'black'
    }
  };

  return (
    <div className="position-relative">
      <img style={styles.img} src={imageUrl} alt={title} />
      <div style={styles.overlay}>
        <a style={styles.a} href={deployedUrl}>{title}</a>
      </div>
      <a href={gitHubUrl} style={styles.icon}>
        <img src={iconUrl} alt="GitHub Icon" width="30" />
      </a>
    </div>
  );
};

export default Project;
