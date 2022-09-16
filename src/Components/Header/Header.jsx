import { BsCloudSun } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <IconContext.Provider
          value={{
            color: 'red',
            size: '2rem',
          }}
        >
          <BsCloudSun />
        </IconContext.Provider>
        <Link to="/">
          <h1>Vai Chuvê?</h1>
        </Link>
      </div>
      <Link to="/devs">Desenvolvedores</Link>
    </header>
  );
};

export default Header;
