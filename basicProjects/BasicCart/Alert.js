import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  // using useffect to remove the showAlert function in order to remove the alert after 3 seconds
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      removeAlert();
    }, 3000)
    return ()=> clearTimeout(timeOut);
  },[list])
  return (// format for the alert using bootstrap classes 
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert