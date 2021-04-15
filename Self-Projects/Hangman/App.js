import React, {useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import AppStyle from './AppStyle.css';
import { useGlobalContext } from './HangmanContext';
import Word from './Word';
import WrongLetter from './WrongLetter';

const App = ()=>{

    // app for word list
    const wordList = ['Bangladesh', 'China', 'Japan', 'India', 'Argentina'];
    const wordLen = wordList.length;
    
    let wordSelect = wordList[Math.floor(Math.random() * wordLen)];

    // primary global context;
    const {correctLetter, wrongLetter, setWrongLetter, setCorrectLetter} = useGlobalContext();

    const Alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const handleClickLetter = (e) =>{
        const letterCaseDown = e.target.textContent.toLowerCase();
        console.log(letterCaseDown);
        if(wordSelect.includes(letterCaseDown)){
            if(!correctLetter.includes(letterCaseDown)){
                setCorrectLetter((currentLetter)=> [...currentLetter, letterCaseDown])
            }
        }
    }

    return(
            <div className="Hangman">
                <h1>Testing A Basic Hangman Game</h1>   
                <div className="container">
                    <Word correctLetter={correctLetter} wordSelect={wordSelect.toLowerCase()}/>
                    <WrongLetter wrongLetter = {wrongLetter}/>

                <div className="letter-btn">
                    {Alphabets.map((letter, index)=>{
                        return(
                            <button className='moji' key={index} onClick={handleClickLetter}>
                                {letter}
                            </button>
                        )
                    })}
                </div>
                </div>
            </div>
    )
}

export default App;