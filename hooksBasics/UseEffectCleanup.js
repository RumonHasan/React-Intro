import React, {useState, useEffect} from 'react'; // you can import the hooks or use React.useState and import the hooks manually 
import ReactDOM from 'react-dom';
import App from './App.css'; // imports css app by default 

const UseEffectCleanUp = () =>{
    const [size, setSize] = React.useState(window.innerWidth);
    const checkSize = () =>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{// used to update the window size as we resize the window 
        console.log('useFfect')
        window.addEventListener('resize', checkSize);
        return ()=>{// return contains the cleanup function 
            console.log("cleanup")// cleaning up the eventlisteners after the rerender of the useffect function
            window.removeEventListener('resize', checkSize);
        }
    });// constantly removing the eventlistener function from being pilled up 
    // Or in this case you can use an empty dependency list in order to solve the issue 
    console.log("render");
    return (
        <React.Fragment>
            <div className="container">
                <h1>UseEffectCleanUp</h1>
                <h1>{size}Px</h1>
            </div>
        </React.Fragment>
    )
}

export default UseEffectCleanUp;