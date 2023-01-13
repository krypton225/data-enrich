import { LeftPartSection, SingleInfo } from "./home";

const PricingComponent = () => {
    return (
        <>
            <div className="w-full mb-6 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                <div className="w-full lg:w-[60%] text-center lg:text-start">
                    <p className="mb-6 text-primary text-3xl font-semibold">Everything you need for&nbsp;
                        <span className="text-secondary">$99 a month</span></p>
                    <p className="text-[#444]">Includes every feature we offer plus unlimited projects and unlimited users.</p>
                </div>

                <div className="w-full lg:w-[30%] mx-auto text-center">
                    <button className="rounded-md px-12 py-1 capitalize bg-secondary text-white">get started today</button>
                </div>
            </div>

            <div className="divider"></div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mx-auto lg:mx-0 text-center lg:text-left text-primary">
                <LeftPartSection />

                <SingleInfo />

                <SingleInfo />
            </div>
        </>
    )
}

export default PricingComponent;