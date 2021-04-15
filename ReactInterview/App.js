import * as React from 'react';
import './App.css';

const {useState, useEffect} = React; // destructuring from the  react library 
const url = 'https://randomuser.me/api';

const App = () =>{
    // counter state 
    const [counter, setCounter] = useState(0);
    const [randomUser, setRandomUser] = useState([]); // state for random user 
    const [showInfo, setInfo] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

    // basics to decrease counter 
    const decreaseCounter = ()=>{
        setCounter(counter - 1)
     }

    const fetchDataOnButton = async () =>{
        const response = await fetch(url);
        const randomData = await response.json();
        setRandomUser(JSON.stringify(randomData));
        setUserInfo(randomData.results); // transferring the results to the setUserInfo state
        setInfo(true);
    }

    useEffect(()=>{
        fetchDataOnButton()
    },[])

    const getUserInfo = (singleUser) =>{
        const {name: {first, last}} = singleUser;
        return `${first} ${last}`; 
    }

    console.log(randomUser);

    return(
        <div className="App">
            <h1 align="center">React Interview Practice</h1>
            <button className="button-increase" onClick={()=>setCounter(counter+1)}>Increase</button>
            <button className="button-decrease" onClick={decreaseCounter}>Decrease</button>
            <p>{counter}</p>

            <pre>
                <button className='randomClick' onClick={()=>fetchDataOnButton()}>ClickMeToGetData</button>
                <div className="user-info">
                    {userInfo.map((singleUser, index)=>{
                        <div className="single-user" key={index}>
                        {getUserInfo(singleUser)}
                        <img src={singleUser.picture.thumbnail} alt={singleUser.picture}></img>
                        </div>
                    })}
                </div>
            </pre>
            <p>

            </p>
        </div>
    )
}

export default App;