import { useState } from "react";

import { HamburgerButton, ListItems, MainLogo } from "./index";

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
                    <ListItems mdScreen={false} />
                </ul>

                <HamburgerButton onClickHandler={changeBurgerIconHandler} getMdScreenState={mdScreen} />
            </div>

            <ul className={`w-screen h-screen absolute top-0 ${mdScreen ? "left-0" : "-left-[200%]"} z-[9999] flex flex-col justify-center items-center md:hidden capitalize bg-primary transition-all duration-[0.6s] ease-in-out`}>
                <ListItems mdScreen={true} closeMenuInMdScreen={closeMenuInMdScreen} />
            </ul>
        </nav>
    )
}

export default Navbar;