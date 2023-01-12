import { useState } from "react";

import NavbarItems from "../data/navbarItems";

import { HamburgerButton, MainLogo } from "./index";

const Navbar = () => {
    const [mdScreen, setMdScreen] = useState(false);

    const changeBurgerIconHandler = () => {
        setMdScreen((prev) => !prev);
    }

    const closeMenuInMdScreen = () => {
        setMdScreen(false);
    }

    return (
        <nav className="w-screen relative py-2 text-white">
            <div className="container relative flex justify-between items-center">
                <MainLogo />

                <ul className="hidden md:flex items-center capitalize">
                    {
                        NavbarItems.map(({ id, itemText, itemRoute }) => (
                            <li key={id} className="ml-6">
                                <a href={itemRoute} className="inline-block py-3">{itemText}</a>
                            </li>
                        ))
                    }
                </ul>

                <HamburgerButton onClickHandler={changeBurgerIconHandler} getMdScreenState={mdScreen} />
            </div>

            <ul className={`w-screen h-screen absolute top-0 ${mdScreen ? "left-0" : "-left-[200%]"} z-[9999] flex flex-col justify-center items-center md:hidden capitalize bg-primary transition-all duration-[0.6s] ease-in-out`}>
                {
                    NavbarItems.map(({ id, itemText, itemRoute }) => (
                        <li key={id} className="my-6" onClick={closeMenuInMdScreen}>
                            <a href={itemRoute} className="inline-block py-3">{itemText}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar;