import { useState } from 'react';
import { toast } from 'react-toastify';


const QuizOptions = ({option,singleQus}) => {
    const [value,setValue] = useState('');
    
    const {correctAnswer, id } = singleQus;
    const handleButton = () => {
        if(option === correctAnswer){
            toast.success(`Correct`);
            setValue('Correct');
        }
        else{
            toast.warn(`Incorrect. Correct is ${correctAnswer}`);
            setValue('Incorrect');
        }
    }
    return (
        <div>
            <div className="md:flex gap-2">
                <input onClick={()=>handleButton()} type="radio" name={id} id={option} />
                <label htmlFor={option}>{option}</label>
                
                <h1 className={`text-center font-bold ${value === 'Correct' ? `bg-green-600 px-2` : `bg-red-600` }`}>{value}</h1>
            </div>
        </div>
    );
};

export default QuizOptions;

