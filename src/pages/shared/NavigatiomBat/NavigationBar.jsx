import React, { useContext } from 'react';
import logo from '../../../assets/spicehouseheader.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .error(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-semibold'><a><Link to='/'>Home</Link></a></li>
                            <li className='font-semibold'><a><Link to='/blog'>Blog</Link></a></li>
                            <li className='font-semibold'><a>Contact</a></li>
                        </ul>
                    </div>
                    <Link to="/"><img className='h-10' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-xl'><a><Link to='/'>Home</Link></a></li>
                        <li className='font-bold text-xl'><a><Link to='/blog'>Blog</Link></a></li>
                        <li className='font-bold text-xl'><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && <p className='mr-8 '>
                        <div className="tooltip tooltip-bottom" 
                        data-tip={user.displayName ? 
                        user.displayName : 'user name unavailable'}>
                        <button className="btn"><img className='rounded-full h-2/4' src={user?.photoURL} alt="" /></button>
                    </div></p>}
                    {user ?
                        <a onClick={handleLogout} className="btn bg-[#F9A51A] text-black">Logout</a> :
                        <Link to="/login">
                            <a className="btn bg-[#F9A51A] text-black">Login</a>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;