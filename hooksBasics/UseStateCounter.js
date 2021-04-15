import React from 'react';
import ReactDOM from 'react-dom';
//UseStateCounter

const UseStateCounter = () =>{
    // jsx style design included
    const [value, setValue] = React.useState(0);// default value by 0
    
    const resetVal = () =>{
        setValue(0);
    }
    const complexIncrease = () =>{
        // setValue(value+1) -> In this case you would get the same value when u initially call the value ;
        setTimeout(() =>{
            setValue((prevState)=>{
                return prevState + 1;// getting the correct value to increase the counter based on ur clicks 
            })
        }, 2000)
    }
    return (
        <React.Fragment>
            <section className="container" style={{margin: '4rem 0'}}>
                <h1>{value}</h1>
                <button className="increase" onClick={()=> setValue(value+1)}>Increase</button>
                <button className="decrease" onClick={()=> setValue(value-1)}>decrease</button>
                <button className="reset" onClick={()=> resetVal()}>reset</button>
            </section>

            <section className="complex-container" style={{margin: '4rem 0'}}>
            <h1>More complex counter</h1>
            <h1>{value}</h1>
            <div class="complex-counter">
            <button className="btn" onClick={complexIncrease}>Increase later</button>
            </div>
            </section>

            <section className="people container">
                <People/>
            </section>
        </React.Fragment>
    );
}
