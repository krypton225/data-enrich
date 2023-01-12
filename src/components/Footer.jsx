import FirstFooterLinks from "../data/first-footer-links";
import SecondFooterLinks from "../data/second-footer-links";
import ThirdFooterLinks from "../data/third-footer-links";
import FourthFooterLinks from "../data/fourth-footer-links";

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-5 sm:gap-x-12 lg:gap-y-6">
                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">solutions</p>

                        <ul className="w-full flex flex-col text-start text-sm">
                            {
                                FirstFooterLinks.map(({ id, linkText, linkPath }) => (
                                    <li key={id} className="mb-2">
                                        <a href={linkPath} className="block py-1">{linkText}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">support</p>

                        <ul className="w-full flex flex-col text-start text-sm">
                            {
                                SecondFooterLinks.map(({ id, linkText, linkPath }) => (
                                    <li key={id} className="mb-2">
                                        <a href={linkPath} className="block py-1">{linkText}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">company</p>

                        <ul className="w-full flex flex-col text-start text-sm">
                            {
                                ThirdFooterLinks.map(({ id, linkText, linkPath }) => (
                                    <li key={id} className="mb-2">
                                        <a href={linkPath} className="block py-1">{linkText}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="capitalize text-start">
                        <p className="mb-2 text-[#777]">legal</p>

                        <ul className="w-full flex flex-col text-start text-sm">
                            {
                                FourthFooterLinks.map(({ id, linkText, linkPath }) => (
                                    <li key={id} className="mb-2">
                                        <a href={linkPath} className="block py-1">{linkText}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="w-full">
                    <p className="mb-3 font-semibold">Subscribe to our newsletter</p>

                    <p className="mb-2 font-semibold">The latest news, articles and resources sent to your inbox weekly</p>

                    <div className="w-full flex justify-between items-center">
                        <input type="email" name="news-email" id="news-email" placeholder="Enter your email" className="w-full" />

                        <input type="submit" name="news-submit" id="news-submit" value="Subscribe" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;