import { DiDatabase } from "react-icons/di";

import FrequentlyImage from "../../assets/second-sec-home.jpg";

const IntroImage = () => {
    return (
        <div className="w-full h-[20rem] relative rounded-xl mt-20 overflow-hidden">
            <div className="w-full h-full rounded-xl absolute top-0 left-0 bg-gradient-to-br from-secondary to-violet-600 opacity-80"></div>

            <img src={FrequentlyImage} alt="Frequently.." className="w-full h-full rounded-xl object-cover" />

            <div className="w-full absolute top-1/2 -translate-y-1/2 left-4 text-start">
                <p className="w-full flex items-center space-x-2 text-xl capitalize">
                    <DiDatabase size={26} />
                    <span>staxx</span>
                </p>

                <p className="w-[90%] lg:w-2/3 my-4 text-white text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident voluptas nesciunt beatae numquam voluptates rem nemo unde labore ad, totam tempora quisquam ipsam?
                </p>

                <div className="text-white capitalize font-semibold">
                    <p>james oliver</p>
                    <p>CEO, staxx</p>
                </div>
            </div>
        </div>
    )
}

export default IntroImage;