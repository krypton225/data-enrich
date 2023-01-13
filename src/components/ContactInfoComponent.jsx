import { FormContact, LeftContact } from "./home";

const ContactInfoComponent = () => {
    return (
        <>
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
                <LeftContact />

                <FormContact />
            </div>
        </>
    )
}

export default ContactInfoComponent;