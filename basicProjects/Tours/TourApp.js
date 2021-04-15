import React from 'react';
import ReactDOM from 'react-dom';
import tour from './tour.css';
import Tours from './Tours.js'; // contains all the tours bundle 
import Loading from './Loading.js'

const url = 'https://course-api.netlify.app/api/react-tours-project';

const TourApp = () =>{
    const [loading, setLoading] = React.useState(true)// default loading is true
    const [tours, setTours] = React.useState([]);

    // removing individual tours option by prop drilling and button click 
    const removeTour = (id) =>{
        let newTour = tours.filter((tour)=> // Braces should not be put inside the filter method in order to  perform a single operation 
            tour.id !== id // checkign whether tour id is not available or not.... so updating the new array in the process. 
        );
        setTours(newTour);
    }

    // data fetching from the api link using async await function 
    const fetchTours = async ()=>{
        setLoading(true);// loading animation is set to true when fetching the data 
        try{
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);// passes the tours to the setTours state 
        }catch (error){
            setLoading(false);
            console.log('Error in data fetching');
        }
        
       // needed to install regenerator babel plugin in order to prevent error 
    }
    React.useEffect(()=>{// to prevent rerender error u need to fetch data using useFfect hook 
        fetchTours();
    }, []);

    // displays the loading page when the Loadingstate is set to true. 
    if(loading){
        return(
            <main>
                <Loading/>
            </main>
        )
    }
    // if there are no tours remaining then it calls the function fetch tours and repopulates the list 
    if(tours.length === 0){// the fetch arrow function will not be an arrow function in this case
        return(
            <React.Fragment>
                <div className="title">No Remaining Tours</div>
                <button className="btn" onClick={fetchTours}>Refresh</button>
            </React.Fragment>
        );
    }

    return(
        <main>
            <Tours tours={tours} removeTour={removeTour}/>
        </main>
        );
}
export default TourApp;