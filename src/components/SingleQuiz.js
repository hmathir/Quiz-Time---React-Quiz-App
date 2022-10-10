
const SingleQuiz = ({singleQus}) => {
    const {question, correctAnswer, id, options} = singleQus;
    console.log(options);
    return (
        <div>
            <div className="border border-black w-9/12 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-4 p-5 rounded-xl text-white">
                <h1 className="text-3xl font-bold">{question}</h1>
                <div className="grid grid-cols-2 gap-4">
                    {
                        options.map(option => <h1>{option}</h1>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;