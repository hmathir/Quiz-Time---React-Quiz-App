import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';

export const QuizContex = createContext([]);

const Main = () => {

    const quizsData = useLoaderData();
    const quizs = quizsData.data;

    return (

        <QuizContex.Provider value={quizs}>
            <ToastContainer />
            <Header></Header>
            <Outlet></Outlet>
        </QuizContex.Provider>
    );
};

export default Main;