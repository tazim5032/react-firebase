import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-center gap-4">
            <Link className="border-2 border-green-500 p-2 rounded-xl text-black font-bold" to=''>Home</Link>
            <Link className="border-2 border-green-500 p-2 rounded-xl text-black font-bold" to='/login'>Login</Link>
        </div>
    );
};

export default Header;