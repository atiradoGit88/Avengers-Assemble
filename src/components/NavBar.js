import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
    <div className="nav">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/avengers">Avengers</Link>
        <Link className="navbar-link" to="/avengers/new">New Avenger</Link>
    </div> 
    </nav>
  );
}

export default NavBar;
  