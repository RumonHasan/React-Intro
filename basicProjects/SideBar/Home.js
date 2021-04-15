import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import {UseGlobalContext} from './context.js';

const Home = () => {
    const {openSidebar, openModal} = UseGlobalContext();
  return (
      <main>
          <button className="sidebar-toggle" onClick={openSidebar}>
              <FaBars/>
          </button>
          <button className="btn" onClick={openModal}>Show Modal</button>
      </main>
  )
}

export default Home;