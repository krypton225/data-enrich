import GenerateID from "../utils/generateID";

const firstFooterLinks = [
    { linkText: "marketing", linkPath: "/" },
    { linkText: "analytics", linkPath: "/" },
    { linkText: "commerce", linkPath: "/" },
    { linkText: "insights", linkPath: "/" },
];

(() => GenerateID(firstFooterLinks))();

export default firstFooterLinks;