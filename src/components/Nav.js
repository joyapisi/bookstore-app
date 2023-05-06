import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <a className="logo" href="/">BOOKSTORE CMS</a>
      <div className="nav-box">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Categories">Categories</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
