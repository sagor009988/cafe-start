import React from "react";

const Blog = ({ blog ,handleBookMarks,handleReadTimes}) => {
  
  return (
    <div className="mb-8">
      <img className="h-80 w-full" src={blog.image} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img className="w-14" src={blog.authorImage} alt="" />
          <div >
            <h2>{blog.authorName}</h2>
            <h2>{blog.publishDate}</h2>
          </div>
        </div>
        <div className=" flex gap-5">
          <h1>{blog.readingTime}</h1>
          <button onClick={()=>handleBookMarks(blog)}>BookMark</button>
        </div>
      </div>
      <h1 className=" my-4 text-4xl font-medium">{blog.title.slice(0,30)}</h1>
      {
        blog?.hashtags.map(hash=><span><a href="" className="ml-5">#{hash}</a></span>)
      } <br />
      <button onClick={()=>handleReadTimes(blog.readingTime)} className="text-red-600 underline">Mark As Read</button>
    </div>
  );
};

export default Blog;
