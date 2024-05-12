const Project = ({ title, imageUrl, iconUrl, deployedUrl, gitHubUrl }) => {
  const styles = {
    img: {
      width: '50%',
    },
    iconImg: {
      postion: 'absolute',
      left: '100px',
      width: '10%',
    },
    div: {
      display: 'inline',
    },
  };

  return (
    <div className="p-2">
      <div>
        <a href={deployedUrl}>
          <p>{title}</p>
        </a>

        <img style={styles.img} src={imageUrl} alt={title} />

        <a href={gitHubUrl}>
          <img className="icon-img" src={iconUrl} />
        </a>
      </div>
    </div>
  );
};

export default Project;
