import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav bg-dark justify-content-around px-5 py-2 shadow mb-5 text-light">
      <Link to="/" className="btn btn-outline-light">
        Home
      </Link>
      <Link to="/films" className="btn btn-outline-light">
        Films
      </Link>
      <Link to="/people" className="btn btn-outline-light">
        People
      </Link>
    </nav>
  );
};

export default NavBar;
