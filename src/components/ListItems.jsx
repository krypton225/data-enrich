import NavbarItems from "../data/navbarItems";

const ListItems = ({ mdScreen = false, closeMenuInMdScreen }) => {
    return (
        <>
            {
                mdScreen ?
                    NavbarItems.map(({ id, itemText, itemRoute }) => (
                        <li key={id} className="my-6" onClick={closeMenuInMdScreen}>
                            <a href={itemRoute} className="inline-block py-3">{itemText}</a>
                        </li>
                    ))

                    : NavbarItems.map(({ id, itemText, itemRoute }) => (
                        <li key={id} className="ml-6">
                            <a href={itemRoute} className="inline-block py-3">{itemText}</a>
                        </li>
                    ))
            }
        </>
    )
}

export default ListItems;