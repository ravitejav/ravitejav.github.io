import './NavBar.css';
import { menuBar } from "../../Utils/Constants";
import { MenuItem } from "./MenuItem";
import { MenuItemDetails } from '../../Interfaces/MenuBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const NavBar = () => {

    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div className={`navbarWrapper ${showSideBar ? "fullheight" : ""}`}>
            <div className="hamburger center button" onClick={() => setShowSideBar(sideBar => !sideBar)}>
                <FontAwesomeIcon icon={showSideBar ? faTimes : faBars} />
            </div>
            <ul className={showSideBar ? "mobileMenu center" : ""}>
                {menuBar.map((menuItem: MenuItemDetails, i: number) => (
                    <MenuItem {...menuItem} key={i} />
                ))}
            </ul>
        </div>
    )
}