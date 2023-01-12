import { BsFillTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

const LeftContact = () => {
    return (
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
    )
}

export default LeftContact;