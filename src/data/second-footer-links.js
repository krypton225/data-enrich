import GenerateID from "../utils/generateID";

const secondFooterLinks = [
    { linkText: "pricing", linkPath: "/" },
    { linkText: "documentation", linkPath: "/" },
    { linkText: "guides", linkPath: "/" },
    { linkText: "API status", linkPath: "/" },
];

(() => GenerateID(secondFooterLinks))();

export default secondFooterLinks;