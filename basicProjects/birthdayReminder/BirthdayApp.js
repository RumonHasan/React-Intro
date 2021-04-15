import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import data from './data.js';
import List from './List.js';

const BirthdayApp = () =>{
    const [people, setPeople] = React.useState(data);
  
    // useState hook to get the data from the data js file and make changes to teh data..
    return(// the hook is passed as a prop to the list tag function  
        <main>
            <section className="container">
                <h3>{people.length} Birthdays today</h3>
                <List people={people}/>
                <button onClick={()=>setPeople([])}>Clear List</button>
            </section>
        </main>
    );
}

export default BirthdayApp;
