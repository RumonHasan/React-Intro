import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

// Note: To using useRef hook in React
// similar to that of useState case
// preserves the value
// DOES not trigger re-render
// target DOM nodes/elements 

const UseRef = () =>{

    const refContainer = useRef(null);// asiging a useref in a ref container
    const divContainer = useRef(null);

    const [buttonChange, setIsButtonChange] = React.useState(false);

    // button change handler
    const toggleEditing = () =>{
        setIsButtonChange(!buttonChange);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);// returns the DOM elements or nodes 
        // using refcontainer we do not need to rerender the onchange function value in order to display the form input 
        // it renders only once and gives the final value of the input 
    };
    useEffect(()=>{
        console.log(refContainer.current);
        refContainer.current.focus();
    }); // dependency list not required because the useRef hook only triggers once and does not rerender 
    return (
        <React.Fragment>
            <h1>Use Ref Basics for Uncontrolled Inputs </h1>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type='text' ref={refContainer}/>
                    <button type='submit' onClick={toggleEditing}>
                        {buttonChange ? 'Edit': 'Submit'}
                    </button>
                </div>
            </form>
            <div ref={divContainer}>Hello nigga</div>
        </React.Fragment>
    )
}

export default UseRef;
