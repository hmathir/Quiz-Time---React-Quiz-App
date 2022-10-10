import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header';

export const QuizContex = createContext([]);

const Main = () => {

    const quizsData = useLoaderData();
    const quizs = quizsData.data;


    return (
        <QuizContex.Provider value={quizs}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContex.Provider>
    );
};

export default Main;