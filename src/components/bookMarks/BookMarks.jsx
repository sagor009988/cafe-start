import React, { useState } from 'react';

const BookMarks = ({bookMarks,times}) => {
    const [count,setCount]=useState(0)
    
    return (
        <div className='flex-1 mx-10 bg-slate-400 mt-4 '>
             <h1 className='border-4 border-blue-800 text-center'>Spent Time on Read : {times}</h1>
             <div className=' bg-fuchsia-400 mb-3'>
                <h1 className='text-3xl '>Book Marks Blogs:{bookMarks.length}</h1>
                
             </div>
             <div>
                {
                    bookMarks.map(title=><h1 className='text-center p-4 m-5 bg-slate-50 rounded-lg'>{count}{title.title}</h1>)
                }
             </div>
        </div>
    );
};

export default BookMarks;