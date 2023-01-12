import GenerateID from "../utils/generateID";

const navbarItems = [
    { itemText: "home", itemRoute: "/" },
    { itemText: "pricing", itemRoute: "/pricing" },
    { itemText: "FAQ", itemRoute: "/faq" },
    { itemText: "contact", itemRoute: "/contact" },
];

(() => GenerateID(navbarItems))();

export default navbarItems;