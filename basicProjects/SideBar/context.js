import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


// import React, {useState, useContext} from 'react';

// const AppContext = React.createContext();

// const AppProvider = ({children}) =>{ // always make sure to wrap the children in the usecontext component
//     //main state hooks
//     const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openSideBar = () =>{
//         setIsSideBarOpen(true);
//     }
//     const closeSideBar = () =>{
//         setIsSideBarOpen(false);
//     }
//     const openModal = () =>{
//         setIsModalOpen(true);
//     }
//     const closeModal = () =>{
//         setIsModalOpen(false);
//     }

//     // Note: All the hooks can be accumulated within the context api in order for them to be accessed throughout the menu bar js 

//     return <AppContext.Provider value={isModalOpen, isSideBarOpen, openSideBar
//     , openModal, closeSideBar, closeModal}>{children}
//     </AppContext.Provider> // after stating the context provider it needs to be passed as a hook 
// }

// //custom hook that is gonna be used throughout the entire program 
// export const UseGlobalContext = () =>{ // useGlobalContext becomes the common context api 
//     return useContext(AppContext); 
//     // custom global hook to display the context in a global context hook 
//     // Naming Conventions: GlobalContext needs to be used with Use in order to use it as a global context 
// }

// export {AppContext, AppProvider};