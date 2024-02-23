import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
    <div className="navbar__options">
        <Link to="/">Home</Link>
        <Link to="/avengers">Avengers</Link>
        <Link to="/avengers/new">New Avenger</Link>
    </div> 
    </nav>
  );
}

export default NavBar;
  