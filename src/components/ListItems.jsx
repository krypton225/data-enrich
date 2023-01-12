import { Link } from "react-router-dom";
import NavbarItems from "../data/navbarItems";

const ListItems = ({ mdScreen = false, closeMenuInMdScreen }) => {
    return (
        <>
            {
                mdScreen ?
                    NavbarItems.map(({ id, itemText, itemRoute }) => (
                        <li key={id} className="my-6" onClick={closeMenuInMdScreen}>
                            <Link to={itemRoute} className="inline-block py-3">{itemText}</Link>
                        </li>
                    ))

                    : NavbarItems.map(({ id, itemText, itemRoute }) => (
                        <li key={id} className="ml-6">
                            <Link to={itemRoute} className="inline-block py-3">{itemText}</Link>
                        </li>
                    ))
            }
        </>
    )
}

export default ListItems;