import React from 'react';
const List = ({people})=>{
    const removeItem = (id) =>{

        let newPeople = people.filter((person)=> person.id !== id);
        console.log(newPeople);
        return newPeople;
    }
    return (
        <React.Fragment>
           {people.map((person)=>{
               const {id, name, age, image} = person;
               return(
                <>
                    <article key={id} className="person">
                        <img src={image} alt="image"></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} Years</p>
                        </div>
                        <button className="removeBtn" onClick={()=>removeItem(id)}>Clear Item</button>
                    </article>
                </>
               );
           })} 
        </React.Fragment>
    );
}

export default List;