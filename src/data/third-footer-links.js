import GenerateID from "../utils/generateID";

const thirdFooterLinks = [
    { linkText: "about", linkPath: "/" },
    { linkText: "blog", linkPath: "/" },
    { linkText: "jobs", linkPath: "/" },
    { linkText: "press", linkPath: "/" },
];

(() => GenerateID(thirdFooterLinks))();

export default thirdFooterLinks;