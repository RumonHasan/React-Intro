import React from 'react';
import ReactDOM from 'react-dom';

const Tour = ({id, image, info, price, name, removeTour}) =>{
    // keeping read more false in order to enable it through button activation
    const [readMore, setReadMore] = React.useState(false); 
    // displays only 200 chaarcters at first until the button click...
    // !readMore is enabling us toggle between show more and show less 
    return(
        <React.Fragment>
            <article className="single-tour">
                <img src={image} alt={image}></img>
                <footer>
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className='tour-price'>${price}</h4>
                    </div>
                    <p>{readMore?info: `${info.substring(0,200)} ...`}
                    <button className="read-btn" onClick={()=> setReadMore(!readMore)}>
                        {readMore ? 'show Less': 'read More'}
                    </button>
                    </p>
                    <button className="delete-btn delete" onClick={()=>removeTour(id)}>Not Interested</button>
                </footer>
            </article>
        </React.Fragment>
    );
}

export default Tour;