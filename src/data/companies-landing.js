import { DiDatabase } from "react-icons/di";
import { FaAccusoft, FaStudiovinari } from "react-icons/fa";

import GenerateID from "../utils/generateID";

const sizeIcon = 26;

const companiesLanding = [
    { linkCompany: "https://www.google.com/", iconCompany: <DiDatabase size={sizeIcon} /> },
    { linkCompany: "https://www.google.com/", iconCompany: <FaAccusoft size={sizeIcon} /> },
    { linkCompany: "https://www.google.com/", iconCompany: <FaStudiovinari size={sizeIcon} /> },
];

(() => GenerateID(companiesLanding))();

export default companiesLanding;