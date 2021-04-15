import React from 'react';

const Modal = ({modalContent, closeModal}) =>{
    React.useEffect(()=>{ // closing the model after 3000 miliseconds 
        setTimeout(()=>{
            closeModal();
        }, 3000)
    },[closeModal]);
    return(
        <React.Fragment>
            <div className='modal'>{modalContent}</div>
        </React.Fragment>
    )
}

export default Modal;