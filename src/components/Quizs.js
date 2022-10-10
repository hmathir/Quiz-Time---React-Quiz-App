import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quizs = () => {
   const datas = useLoaderData();
//    const questions = datas.data.questions;
//    console.log(questions);
   const {questions, name} = datas.data

    
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center font-bold mt-4">Quiz of {name}</h1>
            </div>
            <div>
                
                {
                    questions.map((singleQus) => <SingleQuiz key={singleQus.id} singleQus={singleQus}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quizs;