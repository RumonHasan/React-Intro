import { name } from 'file-loader';
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { UseGlobalContext } from './context.js'; // when using braces make sure to have spaces before and after components
const Modal = () => {
    const {isModalOpen, closeModal} = UseGlobalContext(); // global context has access to all the hooks 
    const [name, setName] = React.useState('');
    const [item, setItem] = React.useState([]);

    const handleSubmit = () =>{
        if(!name){
            return;
        }else{
            let newItem = {id: new Date().toString(), title: name};
            setItem([...item, newItem]);
            setName('');
        }
    }
  return(
      <div className={`${isModalOpen ? 'modal-overlay show-modal': 'modal-overlay'}`}>
          <div className="modal-container">
              <h3>modal content</h3>
              <button className="close-modal-btn" onClick={closeModal}><FaTimes/></button>
              <div className="modal-body">
                  <form className ="modal-data">
                    <input type="text" placeholder="Enter Some Data" value={name} onChange={(e)=>setName(e.target.value)}></input>
                    <button className="submit-btn" type="button" onClick={()=>handleSubmit()}>Submit</button>
                  </form> 
                  <DataItem item={item}/>
              </div>
          </div>
      </div>
  )
}

const DataItem = ({item})=>{
    return(
        <React.Fragment>
            <div className="modal-data-list">
                {item.map((singleItem)=>{
                    const {id, title} = singleItem;
                    return(
                      
                            <div>
                                <ul>
                                    <li key={id}><h1>{title}</h1></li>
                                </ul>
                            </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
}

export default Modal;

