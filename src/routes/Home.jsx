import {
    FormLanding,
    FormText,
    LandingCompanies,
    LeftPartSection,
    SignInSocial,
    SingleInfo
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
                </div>
            </div>
        </section>
    );
};

export default Home;