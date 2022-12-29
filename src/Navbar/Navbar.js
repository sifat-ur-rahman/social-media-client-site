import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
      logOut()
      .then(()=>{})
      .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to= '/' className="btn btn-ghost normal-case text-xl">Friend Ster</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/allPost'>All Post</Link></li>
      <li><Link >Massage</Link></li>
      <li><Link >Media</Link></li>
      {user?.uid ?  
          <>
          
           <li><button onClick={(handleLogOut)}>Sign Out</button></li>
          </>
        : <li><Link to='/login'>Login</Link></li>}
      <li><Link to='/about'>About</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;