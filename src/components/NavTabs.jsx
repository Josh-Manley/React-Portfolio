import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-pill">
      <li className="nav-item">
        <Link to="/" className={currentPage === '/' ? 'nav-link-active text-decoration-none' : 'nav-link'}>
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link-active text-decoration-none' : 'nav-link'}>
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link-active text-decoration-none' : 'nav-link'}>
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link-active text-decoration-none' : 'nav-link'}>
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
