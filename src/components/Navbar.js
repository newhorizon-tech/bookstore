import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="navbar">
    <h1 id="main-logo"> Biblioteca </h1>
    <div className="nav-links">
      <Link to="/"> Books </Link>
      <Link to="/categories">Categories</Link>
    </div>
  </nav>
);

export default Navbar;
