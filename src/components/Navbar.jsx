import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path) =>
    location.pathname === path ? styles.active : styles.inactive;

  return (
    <nav className={styles["nav-container"]}>
      <Link to="/" className={getLinkClass("/")}>
        Home
      </Link>
      <Link to="recipes/search" className={getLinkClass("/recipes/search")}>
        Search
      </Link>
      <Link to="random" className={getLinkClass("/random")}>
        Random
      </Link>
    </nav>
  );
};
