import { toast } from 'react-toastify';


const QuizOptions = ({option,singleQus}) => {
    const {correctAnswer, id } = singleQus;
    const handleButton = () => {
        if(option === correctAnswer){
            toast.success(`Correct`)
        }
        else{
            toast.warn(`Incorrect Ans. Correct is ${correctAnswer}`)
        }
    }
    return (
        <div>
            <div className="flex gap-2">
                <input type="radio" name={id} id={option} />
                <label onClick={() => handleButton()} htmlFor={option}>{option}</label>
            </div>
        </div>
    );
};

export default QuizOptions;

