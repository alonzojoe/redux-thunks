import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <h4>Redux Thunks</h4>
      <div className={classes.links}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : null)}
          to=""
        >
          Posts
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : null)}
          to="/todos"
        >
          Todos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
