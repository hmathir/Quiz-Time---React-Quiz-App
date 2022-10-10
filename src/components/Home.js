import { useContext } from "react";
import quizTime from '../assets/quizTime.webp';
import { QuizContex } from "../layout/layout";
import QuizCard from "./QuizCard";

const Home = () => {
    const quizs = useContext(QuizContex);
    return (
        <div>
            {/* style={{ backgroundImage: `url(${quizTime})` }}  */}
            <div className= "hero h-2/4 pt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <div className="hero-content text-center">
                    <div  className="max-w-md">
                        <bac src={quizTime} alt="" />
                        <img className="rounded-xl" src={quizTime} alt="" />
                        <p className="py-6">Quiz Time is a besic Quiz platform for test your self. Are you ready?</p>
                        <a href="#quizSection"  className="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>
            <div id="quizSection">
                <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                {
                    quizs.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;