import { FrequentlyAskedComponent, PricingComponent } from "../components";

import {
    FormLanding,
    FormText,
    IntroImage,
    LandingCompanies,
    SignInSocial
} from "../components/home/index";

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
                    <PricingComponent />

                    <IntroImage />

                    <FrequentlyAskedComponent />
                </div>
            </div >
        </section >
    );
};

export default Home;