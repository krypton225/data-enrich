import { FaFacebookF } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";

import GenerateID from "../utils/generateID";

const sizeIcon = 17;

const socialCompaniesLanding = [
    {
        iconCompany: <FaFacebookF size={sizeIcon} />,
        linkCompany: "https://www.facebook.com/",
        companyName: "Facebook",
        styles: "flex justify-center items-center border-[1px] border-[#ddd] rounded-md py-2 px-3 text-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 ease-out"
    },
    {
        iconCompany: <BsGoogle size={sizeIcon} />,
        linkCompany: "https://www.google.com/",
        companyName: "Google",
        styles: "flex justify-center items-center border-[1px] border-[#ddd] rounded-md py-2 px-3 text-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 ease-out"
    },
    {
        iconCompany: <BsTwitter size={sizeIcon} />,
        linkCompany: "https://twitter.com/",
        companyName: "Twitter",
        styles: "flex justify-center items-center border-[1px] border-[#ddd] rounded-md py-2 px-3 text-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 ease-out"
    },
];

(() => GenerateID(socialCompaniesLanding))();

export default socialCompaniesLanding;