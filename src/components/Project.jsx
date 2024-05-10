const Project = ({ title, imageUrl, iconUrl, onClick }) => {
  handleClick = () => {
    onClick(deployed, github);
  }
  return (
    <div className="card">
      <p onClick={handleClick}>{title}</p>
      <img onClick={handleClick} src={iconUrl} />
      <img src={imageUrl} alt={title} />
    </div>
  )
}

export default Project;