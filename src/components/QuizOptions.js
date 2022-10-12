import { useState } from "react";
import { toast } from "react-toastify";
const QuizOptions = ({
    option,
    singleQus,
    setPositiveCount,
    setNegativeCount,
    disable, setDisable
}) => {
    const [value, setValue] = useState("");
    const { correctAnswer, id } = singleQus;

    const handleButton = () => {

        if (option === correctAnswer) {
            toast.success(`Correct`);
            setValue("Correct");
            setPositiveCount((count) => count + 1);
            setDisable(true);
        } else {
            toast.warn(`Incorrect. Correct is ${correctAnswer}`);
            setValue("Incorrect");
            setNegativeCount((count) => count + 1);
            setDisable(true);
        }
    };
    return (
        <div>
            <div onClick={disable ? null : () => handleButton()} className="flex gap-2 bg-black p-2 rounded-xl h-full items-center">
                <input
                    type="radio"
                    name={id}
                    id={option}
                    disabled={disable}
                />

                <label className={`w-full ${disable ? `cursor-not-allowed` : ``}`} htmlFor={option} >
                    {option}
                </label>


                <h1
                    className={`text-center font-bold ${value === "Correct" ? `text-green-600 px-2` : `text-red-600 px-2`
                        }`}
                >
                    {value}
                </h1>

            </div>
        </div>
    );
};

export default QuizOptions;
