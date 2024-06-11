import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <h4>Redux Thunks</h4>
      <div className={classes.links}>
        <NavLink to="">Posts</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
