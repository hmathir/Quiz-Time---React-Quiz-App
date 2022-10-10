
const QuizCard = ({ quiz }) => {
    const { name, logo, total } = quiz;
    return (
        <div className="card shadow-xl w-11/12 mx-auto my-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            <figure className="border border-black rounded-xl"><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-outline bg-red-600">Total Qus: {total}</div>
                </h2>
                <button className="bg-black rounded-xl border border-white">Start</button>

            </div>
        </div>
    );
};

export default QuizCard;