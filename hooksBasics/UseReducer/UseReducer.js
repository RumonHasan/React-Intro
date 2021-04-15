import React, {useReducer, useState} from 'react';
import Modal from './Modal';
import {data} from './data';
import style from './style.css';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { reducer } from './Reducer';
// reducer function 
// KeyNotes: We only control the states when we dispatch the action and in reducer we use an if else iteration in order to check whether the conditions for manipulating states
// old states: Always make sure you are keeping track of your old state and copying the previous state values. 

const defaultState = { // default states of the usestates combined in default state for dispatchment 
    people: [],
    isModalOpen: false,
    modalContent: 'Hello Friend',
    // all the default states and enclosed in this state..
}
const useReducerBasics = () =>{
    const [name, setName] = useState('');
    const [isEditing, setEditing] = useState(false);
    const [editID, setEditID] = useState('');
    // notes when using useReducer we are getting two things back... the state value and the dispatch function as a payload 
    const [state, dispatch] = useReducer(reducer, defaultState) // usereducer always dispatches various functions 

    // default state contains the values that are passed to the state variable along with the default parameters
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name){
            const newItem = {id:new Date().getTime().toString(), name}
            dispatch({type:'ADD_ITEM', payload: newItem}); 
    // dispatch will pass on a type in order to search through the action list 
            setName('');

        }else if(name && isEditing){
            dispatch({type: 'EDIT_ITEM', payload: editID})
            setEditing(false);
            setName('');
        }
        else{
            dispatch({type: 'NO_VALUE'});
        }
    }

    const closeModal = ()=>{
        dispatch({type:'CLOSE_MODAL'})
    }

    const editItem = (id) =>{
        state.people.find((person)=>{
            if(person.id === id){
                setName(person.name);
                setEditing(true);
                setEditID(id);
            }
        })
    }
    
    return(
        <section className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
            {state.isModalOpen && <Modal closeModal = {closeModal} modalContent={state.modalContent}/>}
                <input type="text" className='input-box' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <button type='submit' className='form-btn'>{isEditing ? 'edit' : 'submit'}</button>
            </form>
            {state.people.map((person)=>{
                const { id, name} = person;
                return(
                    <div key={id} className="list-content">
                        {name}
                        <button className="form-btn" onClick={()=>dispatch({type:'REMOVE_ITEM', payload:id})}><FaTrash/></button>
                        <button className='form-btn edit' onClick={()=>editItem(id)}><FaEdit/></button>
                    </div>
                )
            })}
        </section>
    )
}

// NOte always use an arrow function when clicking a button 

export default useReducerBasics;