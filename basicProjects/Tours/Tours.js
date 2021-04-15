import React from 'react';
import ReactDOM from 'react-dom';
import Tour from './Tour.js';

const Tours = ({tours, removeTour}) =>{ // passing individual tour to the tour file using the spread operator
    return(
        <section>
            <div className="title">
                <h2>Ours Tours</h2>
                <div className="underline">

                </div>
                {tours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                })}
            </div>
        </section>
    );
}
export default Tours;