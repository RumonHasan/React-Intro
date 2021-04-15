import React, { useState, useEffect } from 'react'
import List from './List.js'
import Alert from './Alert.js'
import Cart from './Cart.css';

const getLocalStorage = ()=>{
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));// getting the list if it exists in the local storage.
    }else{
        return [];
    }
}

function CartApp() {
// state values 
const [name, setName] = useState('');// state value for input name 
const [list, setList] = useState(getLocalStorage());// getting the values from the local storage
// states for editing the list values ;
const [isEditing, setIsEditing] = useState(false);// state for the entry that is being edited 
const [editId, setEditID] = useState(null);
//state for specifying alert
const [alert, setAlert] = useState({show: false, msg: '', type: ''});// alert is an object because different alerts will be stored in different ojects along with their colors and texts 

const handleSubmit = (e)=>{// main function that handles all the functions post to clicking the submit button 
    e.preventDefault();
    if(!name){
        // dsisplay alert
        showAlert(true, 'danger','please enter a word')
    }
    else if(name && isEditing){// if there is something in the value and is editing is true 
        // deal with editing feature 
        setList((list.map((item)=>{
            if(item.id === editId){
                return {...item, title: name}
            }
            return item;// default 
        })))
        setName('');
        setEditID(null);
        setIsEditing(false);
        showAlert(true, 'success', 'Value has been changed');
    }else{
        showAlert(true, 'success', 'Item added to the list')
        const newItem = {id: new Date().getTime().toString(), title: name}// adding the new item and specifying its id based on the time of entry into the list  
        setList([...list, newItem]);// preserving the state and adding new item to the list 
        setName('');// removes the cart content after the list has been added 
    }
}

useEffect(()=>{// saving the items to the local storage 
    localStorage.setItem('list', JSON.stringify(list))
},[list])

// const clear list 
const clearList = ()=>{
    showAlert(true, 'danger', 'items have been deleted');
    setList([]);
}

// show alert function
const showAlert = (show=false, type='', msg = '')=>{// es6 paramaters for finding the attributes of alert and specifying their default value 
    setAlert({show,type,msg})// pasing on the attributes in a function for dynamic entry
}

// remove item 
const removeItem = (id)=>{
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item)=>item.id !== id));
}

const editItem = (id) =>{
    const specificItem = list.find((item)=>item.id === id);// in order to find the item and get the title value 
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
}
// Note: Pass onClick as always an inline function or arrow function 
  return (
      <section className='section-center'>
          <form className="grocery-form" onSubmit={handleSubmit}>
            {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>} 
            <h3>Grocery Bud</h3>
            <div className='form-control'>
                <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)}></input>
                <button type='submit' className='submit-btn'>
                    {isEditing? 'edit' : 'submit'}
                </button>
            </div>
          </form>
          {list.length > 0 && // only shows the grocery container if the length of the list is bigger than 0 
                 <div className="grocery-container">
                 <List items={list} removeItem={removeItem} editItem={editItem}/>
                 <button className="clear-btn" onClick={()=>clearList()}>Clear Items</button>
             </div>
          }
     
      </section>
  );
}

export default CartApp