import { FormContact, LeftContact, LeftSectionFQA, RightSectionFQA } from "./home";

const FrequentlyAskedComponent = () => {
    return (
        <>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-start text-primary">
                <LeftSectionFQA />

                <RightSectionFQA />
            </div>

            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
                <LeftContact />

                <FormContact />
            </div>
        </>
    )
}

export default FrequentlyAskedComponent;