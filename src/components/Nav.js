import { NavLink } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

function Nav() {
  return (
    <nav className="flex">
      <NavLink to="/" className="logo flex" id="montserrat" href="/">BOOKSTORE CMS</NavLink>
      <NavLink to="/" id="montserrat">Books</NavLink>
      <NavLink to="/Categories" id="montserrat">Categories</NavLink>
      <div className="flex" id="icon">
        <IoIosPerson />
      </div>
    </nav>
  );
}

export default Nav;
