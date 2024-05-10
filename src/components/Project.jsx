const Project = ({ title, imageUrl, iconUrl, onClick }) => {
  // handleClick = () => {
  //   onClick(deployed, github);
  // }

  const styles = {};

  return (
    <div className="card">
      <p>{title}</p>
      <img src={imageUrl} alt={title} />
      <img src={iconUrl} />
    </div>
  );
};

export default Project;
