import { useAuth } from "../../hooks/useAuth";
import styles from "./Header.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Hamburger from "../hamburger/Hamburger";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ backLink = "" }) => {
  const { isAuth } = useAuth();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {pathname !== "/" ? (
        <button
          onClick={() => {
            navigate(backLink);
          }}
        >
          <FaArrowLeft />
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(isAuth ? "/profile" : "/auth");
          }}
        >
          <FaRegUser />
        </button>
      )}

      <Hamburger />
    </header>
  );
};

export default Header;
