import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-teal-600 text-white">
                <div className="flex-1 ">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Quiz Hero</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Item 1</Link></li>
                        <li><Link to='/'>Parent</Link></li>
                        <li><Link to='/'>Item 3</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;