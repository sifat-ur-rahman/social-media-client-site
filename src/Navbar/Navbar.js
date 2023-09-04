import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log(user)
    const handleLogOut = ()=>{
      logOut()
      .then(()=>{})
      .catch(err => console.error(err))
    }
    return (
        <div data-theme="luxury">
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to= '/' className="btn btn-ghost normal-case text-xl">Friend Ster</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal items-end px-1">
      <li><Link to='/allPost'>All Post</Link></li>
      <li><Link >Massage</Link></li>
      <li><Link >Media</Link></li>
      {user?.uid ?  
          <>
          <div  className="dropdown dropdown-hover  ">
  <label tabIndex={0} className=" ">
  <div className="avatar">
  <div className="w-8 rounded-full ">
    <img src={user.photoURL} alt='' />
  </div>
</div>

  </label>
  <ul data-theme="luxury"  tabIndex={0} className="dropdown-content z-[1] menu  p-2 shadow bg-base-100 rounded-box w-40">
  <li><button onClick={(handleLogOut)}>Sign Out</button></li>
  <li><Link to='/profile'>Profile</Link></li>
  </ul>
</div>
           
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