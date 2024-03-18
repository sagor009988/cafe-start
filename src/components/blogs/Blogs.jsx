import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = ({handleBookMarks,handleReadTimes}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('./file.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h1>Blogs :{blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}
                     handleBookMarks={handleBookMarks} handleReadTimes={handleReadTimes}>
                        
                     </Blog>)
            }
        </div>
    );
};

export default Blogs;