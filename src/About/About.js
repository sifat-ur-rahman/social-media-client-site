import React from 'react';

import Edit from '../Edit/Edit';

const About = () => {
    return (
        <div className='mt-6 mb-6 ml-4 mr-4 bg-base-200'>
            <div className='grid place-content-end'>
                <label htmlFor="my-modal-3" className="btn m-4 btn-primary">Edit</label>
           
           </div>
            <div className="hero  ">
           
  <div className="hero-content text-center">
    <div className="pb-8 space-y-3">
      <h1 className="text-4xl font-bold">Name: Md Sifat Ur Rahman</h1>
      <h4 className='text-2xl font-bold '>Email: sifat@gmail.com</h4>
      <h4 className='text-2xl font-bold'>University: NU</h4>
      <h4 className='text-2xl font-bold'>Address: Khulna, Bangladesh</h4>
      
    </div>
  </div>
</div>
<Edit></Edit>
        </div>
    );
};

export default About;