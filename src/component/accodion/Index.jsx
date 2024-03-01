import React from 'react'
import { useState } from 'react';
import data from './data.js';
import './style.css'
const Index = () => {

const [selected, setselected] = useState(null)
const [enableMultiSelection,setEnableMultiselection]=useState(false);
const [multiselect,setmultiselect]=useState([]);
function handlesingleclick(getcurrentid){
  setselected(getcurrentid===selected ? null : getcurrentid)
}
function handlemultipleclick(getcurrentid){
  let cop=[...multiselect];
  const findIndex=cop.indexOf(getcurrentid);
  console.log(findIndex)
  if(findIndex==-1)
  cop.push(getcurrentid);
else
 cop.splice(findIndex,1);
setmultiselect(cop);
}
console.log(selected,multiselect);
  return (
  <div className='wrapper'>
    <button onClick={()=>setEnableMultiselection(!enableMultiSelection)}>enable multiselect</button>
          <div id="accordion">
          {data && data.length>0 ?(
                data.map((Item)=> (
                <div className='item'>
                   <div 
                       onClick={
                        enableMultiSelection?
                        ()=>handlemultipleclick(Item.id):
                        ()=>handlesingleclick(Item.id)} 
                            className='title'>{Item.question}
          <span>+</span>
         </div>
         { enableMultiSelection ?multiselect.indexOf(Item.id)!==-1  &&
            (<div className='content'>{Item.answer}</div>):
            selected==Item.id && (<div className='content'>{Item.answer}</div>)}
      </div>
      ))):(
      <div>No data found </div>
      )}
  </div>
  </div>
  )
}

export default Index