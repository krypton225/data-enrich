import { DiDatabase } from "react-icons/di";
import { FaAccusoft, FaStudiovinari } from "react-icons/fa";

import GenerateID from "../utils/generateID";

const sizeIcon = 26;

const companiesLanding = [
    { linkCompany: "https://www.google.com/", iconCompany: <DiDatabase size={sizeIcon} />, companyName: "Company 1" },
    { linkCompany: "https://www.google.com/", iconCompany: <FaAccusoft size={sizeIcon} />, companyName: "Company 2" },
    { linkCompany: "https://www.google.com/", iconCompany: <FaStudiovinari size={sizeIcon} />, companyName: "Company 3" },
];

(() => GenerateID(companiesLanding))();

export default companiesLanding;