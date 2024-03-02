import React from 'react'
import {useState} from 'react';
const Index = () => {
    const [typecolor, settypecolor] = useState('hex')
    const [color, setcolor] = useState('#000000')
    function createhexcolr(){
        const hex=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let hexclr="#";
        for(let i=0;i<6;i++){
            hexclr+=hex[Math.floor(Math.random()*hex.length)];
        }
        setcolor(hexclr);
        settypecolor('hex')
       console.log("Hex color is ",hexclr)
    }
    function utlity(length){
      return Math.floor(Math.random()*length)
    }
    function createRGB() {
        const r=utlity(256)
        const g=utlity(256)
        const b=utlity(256);
        setcolor(`rgb(${r},${g},${b})`)
       settypecolor('rgb')
    }
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        background:color,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        border:"2px solid black",
        borderRadius:"10px",
        }} >
        <button style={{margin:"10px",border:"4px solid #000", fontSize:"30px"}} onClick={()=> settypecolor('hex')}>create hex code</button>
        <button style={{margin:"10px",border:"4px solid #000", fontSize:"30px"}} onClick={()=>settypecolor('rgb')}>creeate rgb color</button>
        <button style={{margin:"10px",border:"4px solid #000" ,fontSize:"20px"}} onClick={typecolor==='hex'?createhexcolr:createRGB}>create random generator</button>
              <div style={{display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              fontSize:'60px', marginTop:'50px',}}>
          <h5>{typecolor==="rgb"?"RGB color":"HEX color"}</h5>
          <h3>{color}</h3>
        </div>
    </div>
  )
}

export default Index