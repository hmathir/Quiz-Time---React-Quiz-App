import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Quizs from '../components/Quizs';
import Statistics from '../components/Statistics';
import Main from '../layout/layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/quiz/:id',
                element: <Quizs></Quizs>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            }
        ]
    }
])

export default router;