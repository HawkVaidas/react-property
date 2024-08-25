
import styles from "./styles.module.css";
import burgerBtn from "../../assets/burger-menu.svg";
import {useState} from "react";

const Header = ({links}) => {
  const [isShowOverlay, setShowOverlay] = useState(false);
  return (
    <>
  <header className={styles.header}>
    <h1>Property</h1>
    <nav>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
    <button onClick={() => {
      setShowOverlay(!isShowOverlay);
    }}>
      <img src={burgerBtn.src}alt="menu button"/>
    </button>

  </header>
  <div className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}>
  <nav>
      <ul>
        {links.map((link) => (
          <li>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
  </>
  );
};

export default Header;