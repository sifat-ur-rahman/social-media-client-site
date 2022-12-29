import React from 'react';
import { Link } from 'react-router-dom';
import AddPost from './AddPost';
import ViewPost from './ViewPost';

const Home = () => {
    
    return (
        <div>
            <AddPost></AddPost>
            <ViewPost></ViewPost>
            <div className='grid justify-center'>
            <Link to='/allPost' className="btn btn-accent w-40 m-5">All Post</Link>
            </div>
            
        </div>
    );
};

export default Home;