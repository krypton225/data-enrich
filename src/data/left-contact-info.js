import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

import GenerateID from "../utils/generateID";

const sizeIcon = 16;

const leftContactInfo = [
    {
        icon: <BsFillTelephoneFill size={sizeIcon} />,
        infoText: "+1 (555) 123-4567"
    },
    {
        icon: <BsEnvelopeFill size={sizeIcon} />,
        infoText: "support@example.com"
    },
];

(() => GenerateID(leftContactInfo))();

export default leftContactInfo;