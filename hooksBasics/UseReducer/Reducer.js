export const reducer = (state,action)=>{

    if(action.type === 'ADD_ITEM'){
        console.log(action.payload);
        const newPeople = [...state.people, action.payload] // action gets the payload from of new item from the main function
        return {
            ...state, // spread operator is needed to access the default state
            people: newPeople, 
            isModalOpen: true, 
            modalContent: 'Item Added' } // copying all the state right before the update in order to change it conditionally 
    }
    if(action.type === 'NO_VALUE'){
        return {
            ...state, 
            isModalOpen: true, 
            modalContent: 'Please enter a value'
        }
    }
    // closing a modal after certain type
    // close modal going to be closed after useffect is used within modalContent in the modal js file 
    if(action.type === 'CLOSE_MODAL'){
        return {
            ...state,
            isModalOpen: false
        }
    }
    // removing item reducer function 
    if(action.type === 'REMOVE_ITEM'){
        const newPeople = state.people.filter((person)=> person.id !== action.payload)
        return {
            ...state,
            people:newPeople,
            modalContent: 'Item has been removed'
        }
    }
    if(action.type === 'EDIT_ITEM'){
       state.people.map((person)=>{
            if(person.id === action.payload){
                console.log('editing elementlocated')
            }
        })
    }
    throw new Error ('no matching action type') // if only the dispatch action does not match 
}