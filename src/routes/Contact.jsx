import { ContactInfoComponent } from "../components";

const Contact = () => {
    return (
        <div className="bg-white">
            <div className="container mb-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-y-14 lg:gap-5 items-center">
                <ContactInfoComponent />
            </div>
        </div>
    )
}

export default Contact;