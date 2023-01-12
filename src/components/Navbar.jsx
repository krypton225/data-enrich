import NavbarItems from "../data/navbarItems";

import LogoImage from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-screen relative py-2 text-white">
            <div className="container flex justify-between items-center">
                <div className="w-[3rem] p-1">
                    <a href="/">
                        <img src={LogoImage} alt="Data Enrich Logo" className="w-full object-cover" />
                    </a>
                </div>

                <ul className="flex items-center capitalize">
                    {
                        NavbarItems.map(({ id, itemText, itemRoute }) => (
                            <li key={id} className="ml-6">
                                <a href={itemRoute} className="block py-3">{itemText}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;