import { Link, useLocation } from "react-router-dom";
import Add from "../../Assets/Add";
import Styles from "./styles.module.scss";
import GlobalStyles from "../../global.module.scss";

export default function Navbar() {
  const location = useLocation();

  console.log();

  return (
    <nav className={Styles.navBar}>
      <h1 className={Styles.title}>کارهای من</h1>
      <Link
        to="/add"
        className={[
          Styles.addPage,
          location.pathname !== "/" ? GlobalStyles.hide : "",
        ].join(" ")}
      >
        <button>افزودن</button>
        <Add />
      </Link>
    </nav>
  );
}
