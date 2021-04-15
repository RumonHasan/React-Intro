import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import SideBar from './SideBar.css';

const SideBarApp = () =>{ // main sideBarApp 
  return (
    <>
      <Home/>
      <Modal/>
      <Sidebar/>
    </>
  )
}

export default SideBarApp;