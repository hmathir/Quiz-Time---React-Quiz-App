import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const Quizs = () => {
   const datas = useLoaderData();
   const questions = datas.data.questions;

    
    return (
        <div>
            <div>
                {
                    questions.map(singleQus => <SingleQuiz singleQus={singleQus}></SingleQuiz>)
                }
            </div>
        </div>
    );
};

export default Quizs;