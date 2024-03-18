import "./App.css";
import Header from "./components/header/Header";
import image from '../public/images/profile.png'
import Blogs from "./components/blogs/Blogs";
import BookMarks from "./components/bookMarks/BookMarks";
import { useState } from "react";

function App() {
  const [bookMarks,setBookMarks]=useState([]);
  const [times,setTimes]=useState(0)

  // handle book marks
  const handleBookMarks=(blog)=>{
    const newBookMarks=[...bookMarks,blog]
    setBookMarks(newBookMarks)
  }

  // handle read times
  const handleReadTimes=(timess)=>{
   const newSplitString=+(timess.split(' ')[0]);
    const newTimes=times+newSplitString;
    setTimes(newTimes)
   
  }
  console.log(times);

  return <div className="mx-5">
    <Header></Header>
   <div className=" flex ">
    <Blogs handleBookMarks={handleBookMarks}
    handleReadTimes={handleReadTimes}
    ></Blogs>
    <BookMarks bookMarks={bookMarks} times={times}></BookMarks>
   </div>

  </div>;
}

export default App;
