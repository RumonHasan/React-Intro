import React from 'react';
import { useGlobalContext } from './HangmanContext';

const Word = ({wordSelect})=> {
    const { correctLetter } = useGlobalContext();
    return(
        <>
            <div className = 'word-container'>
                {wordSelect.split('').map((letter, index)=>{
                    // returning spaces or letters filled 
                    return(
                        <span className='letters' key={index}>
                            {correctLetter.includes(letter) ? letter : ' _ '}
                        </span>
                    )
                })}
            </div>
        </>
    )
}

export default Word;