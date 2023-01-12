import { useState } from "react";

import NavbarItems from "../data/navbarItems";

import LogoImage from "../assets/logo.png";

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
                <div className="w-[3rem] p-1">
                    <a href="/">
                        <img src={LogoImage} alt="Data Enrich Logo" className="w-full object-cover" />
                    </a>
                </div>

                <ul className="hidden md:flex items-center capitalize">
                    {
                        NavbarItems.map(({ id, itemText, itemRoute }) => (
                            <li key={id} className="ml-6">
                                <a href={itemRoute} className="inline-block py-3">{itemText}</a>
                            </li>
                        ))
                    }
                </ul>

                <button className={`w-[1.8rem] h-[1rem] rounded-sm absolute right-5 top-1/2 -translate-y-1/2 z-[99999] md:hidden inline-flex flex-col justify-between items-center brightness-200 cursor-pointer ${mdScreen ? "rotate-[360deg]" : "rotate-0"} 
                transition-all duration-[0.7s]`} onClick={changeBurgerIconHandler}>
                    <span className={`w-full h-[2px] block bg-white ${mdScreen ? "rotate-45 translate-y-2" : "rotate-0"} 
                    transition-all ease-out duration-[0.4s]`}></span>
                    <span className={`w-full h-[2px] block bg-white ${mdScreen ? "opacity-0 translate-x-4" : "opacity-1"} 
                    transition-all duration-[0.4s] ease-out delay-[0.4s]`}></span>
                    <span className={`w-full h-[2px] block bg-white ${mdScreen ? "-rotate-45 -translate-y-3" : "rotate-0"} 
                    transition-all ease-out`}></span>
                </button>
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