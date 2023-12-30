import {Link } from 'react-router-dom'

const Navbar = () => {
 
    return ( 
        <nav className="navbar bg-slate-100 p-4 flex justify-between">
            <h1>LOGO</h1>
            <div className="links flex justify-between w-2/6 ">
                <Link to='/' className="hover:font-bold ">Home</Link>
                <Link to="/articles" className="hover:font-bold article"  >articles</Link>
                <div className="flex justify-between gap-2 border-black">
                    <Link to="/login " className="bg-blue-600 rounded-xl pt-1 pb-1 pl-4 pr-4 text-white hover:scale-105">login</Link>
                    <Link to="/register" className="bg-red-600 rounded-xl pt-1 pb-1 pl-4 pr-4 text-white hover:scale-105">register</Link>  
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;