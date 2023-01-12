import LogoImage from "../assets/logo.png";

const MainLogo = () => {
    return (
        <div className="w-[3rem] p-1">
            <a href="/">
                <img src={LogoImage} alt="Data Enrich Logo" className="w-full object-cover" />
            </a>
        </div>
    )
}

export default MainLogo;