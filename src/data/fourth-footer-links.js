import GenerateID from "../utils/generateID";

const fourthFooterLinks = [
    { linkText: "claim", linkPath: "/" },
    { linkText: "privacy", linkPath: "/" },
    { linkText: "cookies", linkPath: "/" },
    { linkText: "terms", linkPath: "/" },
];

(() => GenerateID(fourthFooterLinks))();

export default fourthFooterLinks;