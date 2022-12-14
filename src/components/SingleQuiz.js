import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import QuizOptions from "./QuizOptions";

const SingleQuiz = ({ singleQus, idx, setPositiveCount, setNegativeCount}) => {
    const [toggle, setToggle] = useState(false);
    const [disable,setDisable] = useState(false);
    
    const { question, correctAnswer, options } = singleQus;

    return (
        <div>
            <div className="border border-black md:w-9/12 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 my-4 p-5 rounded-xl text-white">
                <button onClick={() => setToggle(!toggle) }>
                    <FontAwesomeIcon icon={toggle ? faEye : faEyeSlash}></FontAwesomeIcon>
                </button>
                <div>
                    {toggle === true ? (
                        <h1>
                            Correct Ans is:{" "}
                            <span className="bg-green-400 text-black mx-2 p-1 rounded-md">
                                {disable ? correctAnswer : 'Ans The Qus For Check The Correct Answer!'}
                            </span>
                        </h1>
                    ) : (
                        ""
                    )}
                </div>
                <h1 className="text-3xl font-bold">Qus No. {idx+1}: {question}</h1>

                <div className="grid md:grid-cols-2 gap-4 mt-3 ">
                    {options.map((option,idx) => <QuizOptions key={idx} option={option} singleQus={singleQus} setPositiveCount={setPositiveCount} setNegativeCount={setNegativeCount} disable={disable} setDisable={setDisable}></QuizOptions>)}
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;
