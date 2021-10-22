import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MenuItemDetails } from "../../Interfaces/MenuBar";

export const MenuItem = ({menu, closeSideBar} : { menu: MenuItemDetails, closeSideBar: any }) => {
    return (
        <li>
            <Link to={menu.link} className="center" onClick={closeSideBar}>
                <FontAwesomeIcon icon={menu.icon} /> {menu.name}
            </Link>
        </li>
    );
}