import { FaFacebookF, FaAccusoft, FaStudiovinari } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import { BsGoogle, BsTwitter } from "react-icons/bs";

import { FormLanding, FormText, LandingCompanies, SignInSocial } from "../components/home/index";

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
                    <SignInSocial />

                    <FormLanding />

                    <FormText />
                </div>
            </div>
        </section>
    );
};

export default Home;