import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { HashLink as Link } from 'react-router-hash-link';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo2}>
                <Link to='#home'>
                    devcristi
                </Link>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <RxHamburgerMenu size={30} />
            </div>
            {/* New container to hold the navbar */}
            <div className={styles.navContainer}>
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
                            <Button>
                                contact
                            </Button>
                        </Link>
                    </ul>
                </div>
            </div>
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link to='#home' onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link to='#about' onClick={toggleMenu}>
                        About
                    </Link>
                    <Link to='#projects' onClick={toggleMenu}>
                        Work
                    </Link>
                    <Link to='#contact' onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;