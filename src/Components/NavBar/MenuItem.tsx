import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MenuItemDetails } from "../../Interfaces/MenuBar";

export const MenuItem = (props :MenuItemDetails) => {
    return (
        <li>
            <Link to={props.link} className="center">
                <FontAwesomeIcon icon={props.icon} /> {props.name}
            </Link>
        </li>
    );
}