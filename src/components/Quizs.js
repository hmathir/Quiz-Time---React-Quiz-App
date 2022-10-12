import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quizs = () => {
    const datas = useLoaderData();
    const { questions, name, total } = datas.data;
    const [positiveCount, setPositiveCount] = useState(0);
    const [negativeCount, setNegativeCount] = useState(0);


    return (
        <div className="mx-2">
            <div>
                <div className="md:text-3xl md:text-center font-bold mt-4 md:flex items-center justify-between bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500 md:w-9/12 mx-auto text-white px-4 py-1 rounded-xl border border-black">
                    <h1 className="md:text-center font-bold">Quiz of "{name}"</h1>
                    <h1>Total Quiz: {total}</h1>
                    <div className="text-left">
                        <h1>Correct Ans: {positiveCount}</h1>
                        <h1>Incorrect Ans: {negativeCount}</h1>
                    </div>
                </div>

            </div>
            <div>

                {
                    questions.map((singleQus, idx) => <SingleQuiz key={singleQus.id} singleQus={singleQus} idx={idx} setPositiveCount={setPositiveCount} setNegativeCount={setNegativeCount}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quizs;