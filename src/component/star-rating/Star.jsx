import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './style.css';
const Star = ({noofStar=5}) => {
    const [star,setStar]=useState(0)
    const [hover,setHover]=useState(0);
    function handleClick(getcurrentIndex){
        setStar(getcurrentIndex);
    }
    function handleMouseenter(getcurrentIndex){
      setHover(getcurrentIndex)
    }
    function handleMouseLeave(getcurrentIndex){
      setHover(star);
    }

  return (
    <div className="star-rating" style={{padding:"10em"}}>{
        [...Array(noofStar)].map((_,index)=>{
             index=index+1;
            return  <FaStar
             key={index}
             className={index <= (hover || star) ? "on" : "off"}
            size={40}
             onClick={()=>handleClick(index)} 
             onMouseMove={()=>handleMouseenter(index)} 
             onMouseLeave={()=>handleMouseLeave(index)} />
        })}
    </div>
  )
}
export default Star