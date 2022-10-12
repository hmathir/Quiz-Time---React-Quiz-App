
const Blog = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white my-10 md:w-9/12 mx-2 md:mx-auto rounded-xl p-4">
                <div className="my-10">
                    <h1 className="text-2xl font-bold">What is the purpuse of React Router?</h1>
                    <p>React Router is a package. We use it for SinglePage Web and for routing purpose. We got too much readymade hooks with this. We can load data using "loaded" very easily and also doing lot's of critical thing easily with this.</p>
                </div>
                <div className="my-10">
                    <h1 className="text-2xl font-bold">How does context API work?</h1>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
                <div className="my-10">
                    <h1 className="text-2xl font-bold">What is useRef?</h1>
                    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly..</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;