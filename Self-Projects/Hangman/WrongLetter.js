import React from 'react';
import { useGlobalContext } from './HangmanContext';

const WrongLetter = () =>{
    const {wrongLetter} = useGlobalContext();
    return(
        <React.Fragment>
            <div className="wrong-container">
                {wrongLetter.map((letter, index)=>{
                    return(
                        <span className='wrong-letter'>
                            {letter},
                        </span>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default WrongLetter;
