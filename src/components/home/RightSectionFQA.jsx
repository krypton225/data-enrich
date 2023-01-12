import FQAHomeQuestion from "../../data/fqa-home";

const RightSectionFQA = () => {
    return (
        <div className="w-full grid grid-cols-1 gap-y-6">
            {
                FQAHomeQuestion.map(({ id, question, answer }) => (
                    <div key={id} className="w-full">
                        <p className="font-semibold text-lg">{question}</p>
                        <p className="mt-2 text-sm">{answer}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default RightSectionFQA;