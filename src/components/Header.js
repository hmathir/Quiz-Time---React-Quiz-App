import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border border-black mx-auto text-white p-4">
                <div className="flex-1 ">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Quiz Time</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;