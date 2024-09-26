import { FaArrowLeft } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import Hamburger from "../hamburger/Hamburger";
import styles from "./Header.module.scss";

const Header = ({ backLink}) => {
  const { isAuth } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (

    <header className={styles.header}>
      {isAuth && (
        <>
          {pathname === "/" && isAuth ? (
            <button
              aria-label="Go to profile"
              onClick={() => {
                navigate("/profile");
              }}
            >
              <FaRegUser  />
            </button>
          ) : (
            <button
              aria-label="Go back"
              onClick={() => {
                navigate(isAuth ? backLink : "/auth");
              }}
            >
              <FaArrowLeft/>
            </button>
          )}
          <Hamburger />
        </>
      )}
    </header>
  );
};

export default Header;
