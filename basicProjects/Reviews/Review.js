import React from 'react';
import ReactDOM from 'react-dom';
import People from './ReviewData.js';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Review = () =>{
    // setting up the state to acquire the first person data 
    const [index, setIndex] = React.useState(0);
    const {name, job, image, text} = People[index];
    // the index will be dynamically controlled in order to get the data of the other users when clicking the arrow buttons 

    // function to control the length 
    const checkIndex = (indexNumber) =>{
        if(indexNumber > People.length - 1){
            return indexNumber = 0;
        }else if(indexNumber < 0){
            return indexNumber = People.length - 1;
        }else{
            return indexNumber; // else returning the orginal number 
        }
    }

    // function to toggle to the next person 
    const nextPerson = () =>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkIndex(newIndex);
        })
    }
    // function to toggle to the previous person 
    const prevPerson = () =>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkIndex(newIndex);
        })
    }

    // getting data on a random person
    const randomPerson = (number, size) =>{
        number = 0;
        size = People.length;
        setIndex((index)=>{
            index = Math.random() * (size - number) + number;
            return Math.floor(index);
        })
    }

    return(
        <React.Fragment>
            <article className="review">
                <div className="img-container">
                    <img src={image} alt={name} className='person-img'></img>
                    <span className='quote-icon'>
                        <FaQuoteRight/>
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={()=>prevPerson()}>
                        <FaChevronLeft/>
                    </button>
                    <button className="next-btn" onClick={()=>nextPerson()}>
                        <FaChevronRight/>
                    </button>
                </div>
                <button className="random-btn" onClick={()=>randomPerson()}>
                        Random!
                    </button>
            </article>
        </React.Fragment>
    );
}
export default Review;