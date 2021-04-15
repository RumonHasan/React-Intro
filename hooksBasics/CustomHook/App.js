import React from 'react';
import { useFetch } from './useFetch';

// api url
const url = 'https://course-api.netlify.app/api/javascript-store-products';

const App = () =>{
    const { prods } = useFetch(url);
    console.log(prods);
    return(
        <div className="main-container">
            <h1>Displaying the data using custom hook:</h1>

        </div>
    )
}

export default App;

