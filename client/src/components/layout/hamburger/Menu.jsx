import styles from "./Hamburger.module.scss";
import cn from "clsx";
import { menu } from "./menu.data";
import { Link } from "react-router-dom";

const Menu = ({ isShow }) => {
  const logoutHandler = () => {};

  return (
    <nav
      className={cn(styles.menu, {
        [styles.show]: isShow,
      })}
    >
      <ul>
        {menu.map((item, index) => (
          <li key={`_menu${index}`} >
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
