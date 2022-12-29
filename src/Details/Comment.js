
import { useLoaderData } from 'react-router-dom';

import CommentCard from './CommentCard';


const Comment = () => {
    const commentPost = useLoaderData()
    
    return (
        <div className='grid grid-cols-2 gap-4 mt-6 mb-6 justify-items-center'>
            {
                commentPost?.map((cData) => <CommentCard
                key={cData._id}
                cData={cData}
                ></CommentCard>)
            }
        </div>
    );
};

export default Comment;