import LogoImage from "../assets/logo.png";

const MainLogo = () => {
    return (
        <div className="w-[3rem] p-1">
            <a href="/" rel="noopener noreferrer" aria-label="Data Enrich">
                <img src={LogoImage} alt="Data Enrich Logo" className="w-full object-cover" width="500" height="500" />
            </a>
        </div>
    )
}

export default MainLogo;