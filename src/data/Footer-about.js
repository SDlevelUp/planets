
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const sizeIcon = 21;

const footerAbout = [
    {
        urlLink: "https://www.facebook.com",
        linkTitle: "Facebook",
        iconName: <FaFacebookF size={sizeIcon} />,
        hasTarget: false,
        rel: "",
    },
    {
        urlLink: "https://www.twitter.com",
        linkTitle: "Twitter",
        iconName: <FaTwitter size={sizeIcon} />,
        hasTarget: false,
        rel: "",
    },
    {
        urlLink: "https://www.facebook.com",
        linkTitle: "Linkedin",
        iconName: <FaLinkedin size={sizeIcon} />,
        hasTarget: false,
        rel: "",
    },
];

(() => GenerateID(footerAbout))();

export default footerAbout;