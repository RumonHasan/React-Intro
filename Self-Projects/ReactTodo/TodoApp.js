import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Alert from './TodoAlert.js';
import TodoStyle from './TodoStyle.css';
import TodoList from './TodoList.js';

// storing lists in the local storage
const getLocalStorage = () =>{
    let todo = localStorage.getItem('todo');
    if(todo){
        return JSON.parse(localStorage.getItem('todo'));
    }else{
        return [];// return an empty array if no list is present in the storage
    }
}

const TodoApp = () =>{
    const [Value, setSearchValue] = useState('');
    const [todo, setTodo] = useState(getLocalStorage);// state containing the todo List 
    const [alert, setAlert] = useState({show:false, type: '', msg: ''});// alert state created

    // states for editing the list 
    const [editID, setEditID] = useState(null); // the element that will be edited 
    const [isEditing, setIsEditing] =useState(false); // to toggle the button for editing and not editing

    // main submit function 
    const submitHandler = (e)=>{
        e.preventDefault();// preventing default event onclicking 
        if(!Value){// if there is no search value;
            // display Alert
            showAlert(true, 'success', 'Enter an item');

        }else if(Value && isEditing){
            //show alert if item edited
            showAlert(true, 'success', 'item has been edited');
            setTodo(todo.map((item)=>{// you need to call the existing function in order to make changes to the elements
                if(item.id === editID){
                    return{...item, title:Value}// preserving the id but changing the title of the item 
                }
                return item;// return the item 
            }))
            setIsEditing(false);
            setSearchValue('');
        }
        else{
            showAlert(true, 'success', 'Item has been added');
            const newItem = {id: new Date().getTime().toString(), title: Value};// new item with id and title 
            setTodo([...todo, newItem]);// adding the item to the todo list 
            setSearchValue('');
            console.log(todo);
        }
    }

    // alert functiion 
    const showAlert = (show=false, type='', msg='') =>{
        setAlert({show, type,msg});// passing the alert into the function 
    }

    // editing an item 
    const editItem = (id)=>{
        todo.find((item)=>{// returns the first item in an array that satisfies a condition.
            if(item.id === id){
                setIsEditing(true);
                setEditID(id);
                setSearchValue(item.title);
            }
        })
    }

    // remove single item
    const removeItem = (id)=>{
       let newItems = todo.filter((item)=> item.id !== id);
       showAlert(true, 'danger', 'Item has been removed');
       setTodo(newItems);
    }

    // clear all items
    const clearItem = ()=>{
        showAlert(true, 'danger','All the items have been cleared');
        setTodo([]);// clearing the list
    }

    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(todo));
    },[todo]);
    
    return(
        <React.Fragment>
            <section className='main-section'>
                <h1 className='todo-header'>Todo List- React App</h1>
                <form className='todo-form' onSubmit={submitHandler}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} todo={todo}/>}
                    <h3>Todo List</h3>

                    {/* the form controller  */}
                    <div className='todo-form-control'>
                        <input type="text" value={Value} onChange={(e)=>setSearchValue(e.target.value)} 
                        className="search-box" placeholder='Enter the item'></input>
                        <button type="submit" className="submit-btn">
                            {isEditing ? 'edit': 'submit'}
                        </button>
                    </div>

                    {todo.length > 0 &&    
                    <div className="todo-list-container">
                        <TodoList todo={todo} removeItem={removeItem} editItem={editItem}/>
                        <button type="button" onClick={()=>clearItem()} className="clear-btn">Clear Items</button>
                    </div>  
                    }

                </form>
            </section>
        </React.Fragment>
    );    
}

export default TodoApp;