import GenerateID from "../utils/generateID";

const fqaHome = [
    {
        question: "How do you make holy water?",
        answer:
            "You biol the hell out of it. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
        question: "What is the capital gains tax?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil porro error nisi dicta fugiat. Eveniet excepturi id libero obcaecati ut dolores!"
    },
    {
        question: "Where can I get some?",
        answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
        question: "Why do we use it?",
        answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
];

(() => GenerateID(fqaHome))();

export default fqaHome;