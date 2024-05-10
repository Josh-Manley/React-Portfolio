const Project = ({ title, imageUrl, iconUrl, onClick }) => {
  // handleClick = () => {
  //   onClick(deployed, github);
  // }
  return (
    <div className="card">
      <p>{title}</p>
      <img src={iconUrl} />
      <img src={imageUrl} alt={title} />
    </div>
  )
}

export default Project;