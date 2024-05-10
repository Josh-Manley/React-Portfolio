import Link from 'react-router-dom';

export default function Footer () {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link>
          to='https://github.com/Josh-Manley'
        </Link>
        <img src="../assets/github-logo.png" alt="github icon" />
      </li>
      <li className='nav-item'>
        <Link>
          to=''
        </Link>
        <img src="../assets/Linkedin-logo.png" alt="linkedin logo" />
      </li>
      
    </ul>
  )
}