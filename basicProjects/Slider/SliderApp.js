import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import Slider from './Slider.css';

// react icons 
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';

const SliderApp = () =>{ // main slider app function 
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(1);// index starting with 0 in order to slide;

    // function to keep the indexes within the boundary of the list of data 
    useEffect(()=>{
        const lastIndex = people.length -1; // last index of the element 
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people])

    useEffect(()=>{// useffect here is to create an automatic sliding effect where 
        let slider= setInterval(()=>{
            setIndex(index + 1);
        }, 3000)
        return()=>clearInterval(slider);
        // the clear interval function is used to clear the last setInterval function call and start a new one 
    }, [index]);

    return(
        <React.Fragment>
            <section className="section">
                <div className='title'>
                    <h2>
                        <span>/</span> reviews
                    </h2>
                </div>
                <div className="section-center">
                    {people.map((person, personIndex)=>{
                        const {id, image, name, title, quote} = person;
                        // more functionality for sliding function 
                        let position='nextSlide'; // by default all the slides will get a class of next slide 
                        if(personIndex === index){
                            position = 'activeSlide';// for the active slide transform is 0 hence the first slide will appear on the top and the others are moved to the rigth side 
                        }
                        if(personIndex === index - 1 ||(index === 0 && personIndex === people.length- 1)){
                           position = 'lastSlide' 
                        }
                        return(
                            <article key={id} className={position}>
                                <img src={image} alt={name} className='person-img'></img>
                                <h4>{name}</h4>
                                <p className="title">{
                                title}</p>
                                <p className='text'>{quote}</p>
                                <FaQuoteRight className='icon'></FaQuoteRight>
                            </article>
                        );
                    })}
                    <button className='prev' onClick={()=>setIndex(index- 1)}><FiChevronLeft/></button>
                    <button className="next" onClick={()=>setIndex(index+1)}><FiChevronRight/></button>
                </div>
            </section>
        </React.Fragment>
    );
}
export default SliderApp;