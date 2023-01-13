import ContactInfoComponent from "./ContactInfoComponent";

import { LeftSectionFQA, RightSectionFQA } from "./home";

const FrequentlyAskedComponent = () => {
    return (
        <>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start text-primary">
                <LeftSectionFQA />

                <RightSectionFQA />

            </div>
            <ContactInfoComponent />
        </>
    )
}

export default FrequentlyAskedComponent;