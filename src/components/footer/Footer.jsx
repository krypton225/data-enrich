import { Copyright } from "../index";

import { FooterLinks, FooterRightSection } from "./index";

import FirstFooterLinks from "../../data/first-footer-links";
import SecondFooterLinks from "../../data/second-footer-links";
import ThirdFooterLinks from "../../data/third-footer-links";
import FourthFooterLinks from "../../data/fourth-footer-links";

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-12 lg:gap-y-6">
                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">solutions</p>

                        <FooterLinks listName={FirstFooterLinks} />
                    </div>

                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">support</p>

                        <FooterLinks listName={SecondFooterLinks} />
                    </div>

                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">company</p>

                        <FooterLinks listName={ThirdFooterLinks} />
                    </div>

                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">legal</p>

                        <FooterLinks listName={FourthFooterLinks} />
                    </div>
                </div>

                <FooterRightSection />
            </div>

            <Copyright />
        </footer>
    )
}

export default Footer;