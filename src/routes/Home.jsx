import { FormLanding, FormText, LandingCompanies, SignInSocial } from "../components/home/index";

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

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto text-center text-primary">
                        <div className="w-full">
                            <p className="text-secondary text-sm font-semibold uppercase">everything you need</p>
                            <p className="my-2 text-2xl font-semibold">All-in-one platform</p>
                            <p className="text-[#444] text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquam iure tempore quam enim delectus natus assumenda.
                            </p>
                        </div>

                        <div className="w-full">
                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>
                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>
                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>
                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>
                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>

                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>

                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>

                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>

                            <div className="py-4">
                                <p className="mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;