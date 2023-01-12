const HamburgerButton = ({ getMdScreenState, onClickHandler }) => {
    return (
        <button className={`w-[1.8rem] h-[1rem] rounded-sm absolute right-5 top-1/2 -translate-y-1/2 z-[99999] md:hidden inline-flex flex-col justify-between items-center brightness-200 cursor-pointer ${getMdScreenState ? "rotate-[360deg]" : "rotate-0"} 
                transition-all duration-[0.7s]`} onClick={onClickHandler}>

            <span className={`w-full h-[2px] block bg-white ${getMdScreenState ? "rotate-45 translate-y-2" : "rotate-0"} 
                    transition-all ease-out duration-[0.4s] delay-[0.4s]`}></span>

            <span className={`w-full h-[2px] block bg-white ${getMdScreenState ? "opacity-0 translate-x-4" : "opacity-1"} 
                    transition-all duration-[0.4s] ease-out delay-[0.4s]`}></span>

            <span className={`w-full h-[2px] block bg-white ${getMdScreenState ? "-rotate-45 -translate-y-3" : "rotate-0"} 
                    transition-all ease-out duration-[0.4s] delay-[0.4s]`}></span>
        </button>
    );
};

export default HamburgerButton;