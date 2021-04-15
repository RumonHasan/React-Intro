import React, {useState, useEffect} from 'react'; // you can import the hooks or use React.useState and import the hooks manually 
import ReactDOM from 'react-dom';
import App from './App.css'; // imports css app by default 
//useStateObjects =================================================================
const useStateObjects = () =>{ // note return statements always require the first brackets
    const [object, setObject] = React.useState({ // objects declared within the hook in order to make it editable
        name: 'Rumon',
        age: '23',
        job: 'FrontEndDevelopment'
    })
    // second option creating seperate states in order to act as a object
    const [name, setName] = useState('Rumon');
    const [age, setAge] = useState(23);
    const [job, setOccupation] = useState('FrontEndDevelopment');

        // function to change the message of the object 
        // function when onclick need not have empty braces if not passing any values 
        //setObject({...object, occupation: 'FullStackBeastDeveloper'})// the spread operator preserves the remaining components of the object and 
        // then it lets to change a particular parameter within the object. 
    const changeMessage = () =>{ 
        setOccupation('Fullstack')
    }
    return (
        <React.Fragment>
            <div className="container">
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{job}</h3>
                <button className="button" onClick={changeMessage}>changeMessage</button>
            </div>
        </React.Fragment>
    );
}
export default UseStateObjects;