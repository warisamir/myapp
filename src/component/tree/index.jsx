import React from 'react'
import './style.css'
import Menulist from './Menulist'
import menus from './data'
const Index = ({menus=[]}) => {
  return (
    <div className="tree-view-container">
        <Menulist list={menus}/>
    </div>
  )
}

export default Index