import React from 'react';
import ReactDOM from 'react-dom';
import ReviewStyle from './ReviewStyle.css';
import Review from './Review.js';
// note: To include icons we can use react icons from react icons collection library 

const ReviewApp = ()=>{
    return(
        <React.Fragment>
            <main>
                <section className="container">
                    <div className="title">
                        <h2>South Asian Future</h2>
                        <div className="underline"></div>
                    </div>
                    <Review/>
                </section>
            </main>
        </React.Fragment>
    )
}

export default ReviewApp;