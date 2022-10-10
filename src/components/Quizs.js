import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quizs = () => {
   const datas = useLoaderData();
   const questions = datas.data.questions;
   console.log(questions);

    
    return (
        <div>
            <div>
                
                {
                    questions.map((singleQus) => <SingleQuiz key={singleQus.id} singleQus={singleQus}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quizs;