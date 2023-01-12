import {
    FormLanding,
    FormText,
    IntroImage,
    LandingCompanies,
    LeftPartSection,
    LeftSectionFQA,
    RightSectionFQA,
    SignInSocial,
    SingleInfo
} from "../components/home/index";

import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

const Home = () => {
    return (
        <section className="text-white">
            <div className="pb-20 container grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-5 items-center">
                <div>
                    <div className="mb-6 capitalize text-4xl font-semibold">
                        <p className="mb-4">data to enrich your</p>
                        <p className="text-secondary">online business</p>
                    </div>

                    <p className="text-sm text-slate-400">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nesciunt laudantium magnam dolorum distinctio tenetur corrupti consequuntur earum nam possimus.
                    </p>

                    <LandingCompanies />
                </div>

                <div className="w-full md:w-[75%] lg:w-[78%] min-h-[25rem] mx-auto py-8 px-6 rounded-lg bg-white text-primary">
                    <SignInSocial />

                    <FormLanding />

                    <FormText />
                </div>
            </div>

            <div className="w-full mt-7 bg-white py-24">
                <div className="container">
                    <div className="mb-6 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                        <div className="w-full">
                            <p className="mb-6 text-primary text-4xl font-semibold">Everything you need for <span className="text-secondary">$99 a month</span></p>
                            <p className="text-[#444]">Includes every feature we offer plus unlimited projects and unlimited users.</p>
                        </div>

                        <div className="w-full mx-auto text-center">
                            <button className="rounded-md px-12 py-1 capitalize bg-secondary text-white">get started today</button>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mx-auto lg:mx-0 text-center lg:text-left text-primary">
                        <LeftPartSection />

                        <SingleInfo />

                        <SingleInfo />
                    </div>

                    <IntroImage />

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start text-primary">
                        <LeftSectionFQA />

                        <RightSectionFQA />
                    </div>

                    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
                        <div className="w-full text-primary">
                            <h5 className="text-2xl capitalize font-semibold">get in touch</h5>

                            <p className="my-4 text-[#555]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, eius. Vero, est.</p>

                            <div className="capitalize">
                                <p>742 evergreen terrance</p>

                                <p>springfield, OR 12345</p>
                            </div>

                            <div className="w-full lg:w-[35%] mt-6">
                                <div className="w-full flex items-center mb-5">
                                    <BsFillTelephoneFill size={16} />
                                    <p className="ml-2">+1 (555) 123-4567</p>
                                </div>

                                <div className="w-full flex items-center">
                                    <BsEnvelopeFill size={16} />
                                    <p className="ml-2">support@example.com</p>
                                </div>
                            </div>

                            <p className="mt-4">
                                Looking for careers?&nbsp;
                                <span className="text-secondary">
                                    <a href="/">View all jop openings</a>
                                </span>
                            </p>
                        </div>

                        <form className="w-full grid grid-cols-1 gap-y-5 text-primary">
                            <input type="text" name="touch-name" id="touch-name" placeholder="full name"
                                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

                            <input type="email" name="touch-email" id="touch-email" placeholder="your email"
                                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

                            <input type="tel" name="touch-phone" id="touch-phone" placeholder="your phone"
                                className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none" autoComplete="new-password" />

                            <textarea name="message" id="message" placeholder="message"
                                className="w-full min-h-[10rem] max-h-[15rem] resize-y py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize focus:outline-none">
                            </textarea>

                            <div className="w-full form-check flex justify-start items-start">
                                <input className="w-[1.6rem] sm:w-[1rem] h-[1rem] sm:h-[1rem] form-check-input appearance-none border border-gray-300 rounded-sm bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="checkbox" value="" id="checkbox-form" />

                                <label className="form-check-label inline-block text-gray-800" htmlFor="checkbox-form">
                                    By checking this box, you agree to the&nbsp;
                                    <a href="/" className="text-secondary">Privacy Policy</a>&nbsp;
                                    and <a href="/" className="text-secondary">Cookie Policy</a>
                                </label>
                            </div>

                            <input type="submit" value="Submit"
                                className="py-1 px-2 rounded-md bg-secondary text-white transition-all duration-300 cursor-pointer hover:brightness-75" />
                        </form>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Home;