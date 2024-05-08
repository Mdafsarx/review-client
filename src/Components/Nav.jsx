import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Nav = () => {
    const navItems = <>

        <Link to={'/'}>Home</Link>
        <Link to={'/myComment'}>My Comments</Link>

    </>
    const { User , LogOut} = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Pepole Reviews</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        User ?
                            <div className="flex items-center gap-2">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral text-neutral-content rounded-full w-8">
                                        <img src={User.photoUrl} alt="" />
                                    </div>
                                </div>
                                <button onClick={()=>LogOut()}>Log out</button>
                            </div>
                            :
                            <Link to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;