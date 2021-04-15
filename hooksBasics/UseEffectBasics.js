import React, {useState, useEffect} from 'react'; // you can import the hooks or use React.useState and import the hooks manually 
import ReactDOM from 'react-dom';
import App from './App.css'; // imports css app by default 

// useffect performs a task after rerendering of the original function that is passed onto as an argument..
// runs after every rendering of the prev function
// runs outside of the components
// important rule: Hooks can never be places as conditionals meaning they cannot be places within a loop or as an iterative of some sort 
const UseEffectBasics = () =>{
    const [value, setValue] = React.useState(0);
    const increaseNumber = () =>{
        setValue(value + 1);
    }
   useEffect(()=>{// will render after the button is clicked
        console.log('callback useeffect');
        if( value >= 1){
            document.title =`count,(${value})`; // rerendering the title after the callback 
        }
    },[value])// by default the dependency list is set to an empty array so the effect function will not run after the initial render
    console.log('component render')
    return (
        <React.Fragment>
            <div className="container">
                <h1>{value}</h1>
                <button className="btn" onClick={increaseNumber}>Click Me</button>
            </div>        
        </React.Fragment>
    );
}

export default UseEffectBasics;