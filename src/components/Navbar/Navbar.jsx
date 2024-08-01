import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
        <ul>
          <li>
            <div className={styles.logo}>
              <Link to='#home'>
                devcristi
              </Link>
            </div>
          </li>
            <Link to='#about'>
              <Button>
                about
              </Button>
            </Link>
            <Link to='#projects'>
              <Button>
                work
              </Button>
            </Link>
            <Link to='#contact'>
              <Button>contact</Button>
            </Link>
        </ul>
      </div>
    );
};

export default Navbar;