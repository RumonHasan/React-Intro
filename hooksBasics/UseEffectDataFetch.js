import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.css';

const url = 'https://api.github.com/users';

// using async function to fetch data from the api link 
const useEffectSecondArgument = () =>{
    const [users, setUsers] = React.useState([]);
    console.log(users);

    // function for removing user
    const removeUser = (id)=>{
        let newUser = users.filter((user)=>user.id !== id);
        setUsers(newUser);
    }

    // async function for fetching the data
    const fetchUser = async () =>{ // naming an async function for fetching user data 
        const errorMessage = 'failed to fetch the data';
        try{
            const response = await fetch(url);
            const userData = await response.json();
            setUsers(userData);
        }catch(error){
            console.log(errorMessage);
        }
    }

    // running the function for fetching using useEffect hook
    React.useEffect(()=>{
        fetchUser();
    },[])// preventing the userEffect from rerendering and by adding a dependency list 

    // add the users to the page using the reactFragment
    return(
        <React.Fragment>
            <div className="container">
                {users.map((user)=>{
                    const {id, login, url, repos_url } = user;
                    return(
                        <>
                        <div key={id} className = 'user-container'>
                            <p>{login}</p>
                            <p>{url}</p>
                            <p>{repos_url}</p>
                            <button className="delete-btn" onClick={()=>removeUser(id)}>Remove User</button>
                        </div>
                        </>
                    );
                })}
            </div>
        </React.Fragment>
    );

}

export default useEffectSecondArgument;