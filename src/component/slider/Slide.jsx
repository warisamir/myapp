import React, { useState } from 'react'
import { useEffect } from 'react';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'


const Slide = ({url, limit=5,page=1}) => {
    const [image,setImage]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errMsg, seterrMsg] = useState(null);
    const [loading, setloading] = useState(false);

    function handleNext(){
       return   setCurrentSlide(currentSlide==0?image.length-1:currentSlide-1)
    }
    function handleprevious(){
     return setCurrentSlide(currentSlide==image.length-1?0:currentSlide+1)
    }


    async function fetch(getUrl){
        try{
            setloading(true);
        const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data=await response.json();
        if(data){
        setImage(data);
        setloading(false);
        }
    }
        catch(e){
            seterrMsg(e.message)
            setloading(false)
        }
    }
    useEffect(()=>{
        if(url!==' ') fetch(url)
    },[url]);
            if(loading)
            {return <div>Loading data! please wait </div>}
            if(errMsg){
                return <div>Error Occured! {errMsg}</div>
            }
  return (
    <div className='container'>
         <BsArrowLeftCircleFill onClick={handleprevious} className='arrow-left'/>{
            image && image.length ? 
            image.map((imageItem,index)=>(<img key={imageItem.id} 
                alt={imageItem.downloadUrl}
                src={imageItem.downloadUrl}  
                className={currentSlide===index?"current-image":"hide-current-image"}/>
                )):null}
        <BsArrowRightCircleFill onClick={handleNext} className='arrow-right'/>
        <span className='circle-indicators'>
            {
                image && image.length?
                image.map((_,index)=>{
                    <button key={index}
                    className={
                        currentSlide===index
                        ?"current-indicator":
                    "current-indicator hide-current-indicator"}
                    onClick={()=>setCurrentSlide(index)}
                    >
                    </button>
                }):null
                }
        </span>
    </div>
  )
}

export default Slide