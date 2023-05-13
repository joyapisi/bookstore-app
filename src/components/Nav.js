import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <a className="logo" id="montserrat" href="/">BOOKSTORE CMS</a>
      <NavLink to="/" id="montserrat">Books</NavLink>
      <NavLink to="/Categories" id="montserrat">Categories</NavLink>
      <div id="icon" />
    </nav>
  );
}

export default Nav;
