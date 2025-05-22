import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link to="/WeatherDisplay">Weather</Link>
        </li>
        <li>
          <Link to="/auth">SignIn/SignUp</Link>
        </li>
        <li>
          <Link to="/NotFound">NotFound</Link>
        </li>
      </ul>
    </nav>
  );
}