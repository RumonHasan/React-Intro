import React, { useEffect } from 'react';

const Alert = ({type, msg, removeAlert, todo})=>{
    useEffect(()=>{
        const alertTimeOut = setTimeout(()=>{
            removeAlert();
        }, 3000);
        return(()=> clearTimeout(alertTimeOut));
    },[todo]);// runs the alert 3 seconds for every entry 
    return(
        <React.Fragment>
            <p className={`alert alert-${type}`}>{msg}</p>
        </React.Fragment>
    );
}
export default Alert;