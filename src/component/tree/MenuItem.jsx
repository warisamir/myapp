import React from 'react'
import Menulist from './Menulist'
import { useState } from 'react'
const MenuItem = ({item}) => {

  const [displaycurrchild, setdisplaycurrchild] = useState({})

  function handleToggleChildren(getcurrentlevel){
    return setdisplaycurrchild({
      ...displaycurrchild,[getcurrentlevel]:!displaycurrchild[getcurrentlevel],
    });
  }
  console.log(displaycurrchild)
  return (
    <li >
      <div className='menu-item' style={{display:"flex",
      gap:"20px",
      }}>
      <p>{item.label}</p>
      {
        item && item.children && item.children.length>0? <span
        onClick={()=>handleToggleChildren(item.label)}>
          {
            displaycurrchild[item.label]?'-':'+'
          }
        </span>:null
      }
      {
        item && item.children && item.children.length>0 && 
        displaycurrchild[item.label]?
       <Menulist list={item.children}/>:null
      }
      </div>
    </li>

  )
}

export default MenuItem