import React from 'react' // you can import the hooks or use React.useState and import the hooks manually 
import ReactDOM from 'react-dom'
import App from './ReactInterview/App';
// react Notes: remember each component will title need to be capitalized
//import SideBarApp from './basicProjects/SideBar/SideBarApp.js'// css important 

ReactDOM.render(<App/>, document.querySelector('#root'));
// react component names always start with a capital letter




























//const books =[ {
    //     title: "Rumon Hasans life",
    //     number: 22,
    //     job: "developer"
    // },
    // {
    //     title: "Rumonlife",
    //     number: 22,
    //     job: "webdeveloper"
    // }];
    
    // const useStateBasics = () =>{
    //     const [name, setName] = useState('');
    
    //     const handler = () =>{
    
    //         if(name === ''){
    //             setName('Rumon The tiger boy');
    //         }else{
    //             setName('');
    //         }
            
    //     }
    
    
    
    
    // const Booklist = () =>{
    //     return ( // note: number values in jsx will always be included in the curly braces
    //         <div>
    //             <section className ="booklist-section">
    //                  {books.map((book)=>{// passing individual book object to the the book component
    //                      return(
    //                         <div>
    //                             <Book book={book}></Book>
    //                         </div>
    //                      );
    //                  })}
    //             </section>
    //         </div>
    //     );
    //     // the book is parameters are passed as a prop to the book objects 
    // }
    
    // //note: jsx props children: 
    // // note: within jsx js variables and other functions can be included within the curly braces
    // const Book = (props) =>{ // props call props from the original book object included in the book list 
    //     const {title, number, job} = props.book //gets the book from the book component
    //     // objects can be destructured within the function itself..
    //     return ( // contents of the book through jsx format
    //         <article className="book">
    //             <h1>{title}</h1>
    //             <h4>{number}</h4>
    //             <h5>{job}</h5>
    //             <h6>{name}</h6>
    //              <button className = 'button' onClick = {handler}>Change Something</button>
    //         </article>
    //     );
    // }
    // }
    