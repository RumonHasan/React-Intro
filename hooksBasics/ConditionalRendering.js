import React, { useState } from 'react' 
import ReactDOM from 'react-dom'
import App from '../App.css';

const url = 'https://api.github.com/users/QuincyLarson';

const ConditionalRendering = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [user, setUser] = useState('default user');

    // Fetching data 
    React.useEffect(()=>{
        fetch(url)// fetches the url 
        // fetches the response and gets the data from the url 
        .then((response)=>{
            if(response.status >=200 && response.status <=299){
                return response.json()
            }else{
                setIsLoading(false);
                setError(true);
                // optional syntax for throwing an error incase of different http status code
                throw new Error(response.statusText); // throwing the error 
            }
        })
        // gets the user info destructured in a login in value and passes it onto to the login information
        .then((user)=>{
            const {login} = user;
            setUser(login);
            setIsLoading(false);
        })
        // catches the error and updates the error states 
        .catch((error)=> console.log(error));
    }, []);

    if(isLoading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if(isError){
        return(
            <div>
                <h1>Error...</h1>
            </div>
        );
    }

    return (
        <div>
            {user}
        </div>
    );

}

export default ConditionalRendering;


    // const MultipleReturns = () =>{
    //     const [loading, setLoading] = useState(false);
    //     if(loading){
    //         return <h2>Loading...</h2>
    //     }
    //     return <h2>Multiple Returns</h2>
    // }