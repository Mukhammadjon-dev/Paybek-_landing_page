import { useState } from "react";
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom";

import "./styles.css"

import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/close.svg';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const currentIcon = isOpen ? closeIcon : menuIcon;

    const toggleNavbar = () => setIsOpen(!isOpen)

    const renderNavigationItems = () => (<nav className="navbar">
        <a>Top up</a>
    </nav>)

    return <div className="header-outer">
        <div className="header-inner">
            <NavLink to="/"><img src={logo} alt="Paybek logo" /></NavLink>

            <img className="menu-icon" src={currentIcon} alt="Menu" onClick={toggleNavbar} />

            <div className="header-items__right">
                {renderNavigationItems()}
                <button className="header-button__rounded">Get the app</button>
            </div>
        </div>
        <motion.div className="expandable-menu"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5 }}>
            {renderNavigationItems()}
        </motion.div>
    </div>
}

export default Header;