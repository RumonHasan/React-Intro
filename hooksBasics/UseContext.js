import React, {useState, useContext} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import ReactDOM from 'react-dom';

const UseContextBasics = () =>{ // main function for use context hook
    const personContext = React.createContext(); // main primary context 

    const [name, setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name){
            console.log('display alert');
        }
        
    }

    return(
        <>
            <div className="person-container">
                <form className="person-form" onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter a name'></input>
                    <button type="submit" className="submit-btn">submit</button>
                </form>
            </div>
        </>
    );
}


export default UseContextBasics;
