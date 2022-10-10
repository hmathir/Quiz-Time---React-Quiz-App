
const QuizOptions = ({option,singleQus}) => {
    const {correctAnswer, id } = singleQus;
    const handleButton = () => {
        if(option === correctAnswer){
            <div>
                <h1>Correct</h1>
            </div>
        }
        else{
            <div>
            <h1>InCorrect</h1>
        </div>
        }
    }
    return (
        <div>
            <div className="flex gap-2">
                <input onClick={() => handleButton()} type="radio" name={id} id={option} />
                <label onClick={() => handleButton()} htmlFor={option}>{option}</label>

            </div>
        </div>
    );
};

export default QuizOptions;