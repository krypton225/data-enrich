import { FaFacebookF, FaAccusoft, FaStudiovinari } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import { BsGoogle, BsTwitter } from "react-icons/bs";

import { FormText, LandingCompanies } from "../components/home/index";

const Home = () => {
    return (
        <section className="text-white">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-5 items-center">
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
                    <div>
                        <p className="font-semibold">Sign in with</p>

                        <div className="w-full mt-4 grid grid-cols-3 space-x-0">
                            <a href="https://www.facebook.com/"
                                className="flex justify-center items-center border-[1px] border-[#ddd] rounded-md py-2 px-3 text-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 ease-out">
                                <FaFacebookF size={17} />
                            </a>

                            <a href="https://www.google.com/"
                                className="flex justify-center items-center border-[1px] border-[#ddd] rounded-md py-2 px-3 text-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 ease-out">
                                <BsGoogle size={17} />
                            </a>

                            <a href="https://twitter.com/"
                                className="flex justify-center items-center border-[1px] border-[#ddd] rounded-md py-2 px-3 text-center text-primary hover:bg-secondary hover:text-white transition-all duration-500 ease-out">
                                <BsTwitter size={17} />
                            </a>
                        </div>

                        <div className="relative mt-7 text-center font-medium">
                            <div className="w-[45%] h-[0.6px] absolute top-1/2 -translate-y-1/2 left-0 bg-[#bbb]"></div>
                            <span>OR</span>
                            <div className="w-[45%] h-[0.6px] absolute top-1/2 -translate-y-1/2 right-0 bg-[#bbb]"></div>
                        </div>
                    </div>

                    <form className="mt-6 grid grid-cols-1 gap-y-4">
                        <input type="text" name="name" id="name" placeholder="name" className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize" />

                        <input type="email" name="email" id="email" placeholder="email" className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize" />

                        <input type="password" name="password" id="password" placeholder="password" className="py-1 px-2 border-[1px] border-[#bbb] rounded-md placeholder:capitalize" />

                        <input type="submit" value="Create an account" className="py-1 px-2 rounded-md bg-secondary text-white transition-all duration-300 cursor-pointer hover:brightness-75" />
                    </form>

                    <FormText />
                </div>
            </div>
        </section>
    );
};

export default Home;