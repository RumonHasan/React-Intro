import React from 'react';
import ReactDOM from 'react-dom';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';

const TodoList = ({todo, removeItem, editItem})=>{
    return(
        <React.Fragment>
            <div className="todo-list">
                {todo.map((item)=>{
                    const {id, title} = item;
                    return(
                        <div className="todo-item" key={id}>
                            <p className="title">{title}</p>
                            <button className="delete-btn" type='button' onClick={()=>removeItem(id)}><FaTrashAlt/></button>
                            <button className="edit-btn" type="button" onClick={()=>editItem(id)}><FaEdit/></button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}

export default TodoList;