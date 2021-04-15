import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.css';
import items from './data.js';
import Categories from './Categories.js';
import MenuItems from './Menu.js'
import Search from './Search.js'

// gathering all the unique category names
const  AllCategories = ['All', ...new Set(items.map((item)=>item.category))];

const App = () =>{
    // states containing the catgeories and the menuItems from the data file 
    const [menuItems, setMenuItems]= React.useState(items);
    const [categories, setCatgories] = React.useState(AllCategories);
    const [Keyword, updateKeyword] = React.useState('');
    console.log(Keyword);
    
    // filter items 
    const filterItems = (category)=>{
        // all items
        if(category === 'All'){
            setMenuItems(items);
            return;
            //return for stopping the loop once it find all the items 
        }

        // updating based on the selected category
        let newItems = items.filter((item)=>item.category === category);
        setMenuItems(newItems);
    }

    let newList = items.filter((item)=>item.title.toLowerCase().startsWith(Keyword.toLowerCase()));
    console.log(newList);

    return(
        <React.Fragment>
            <main>
                <section className='menu'>
                    <div className="title">
                        <h2>Our Menu</h2>
                        <div className='underline'></div>
                    </div>
                    <Categories categories={categories} filterItems={filterItems}/>
                    <Search Keyword={Keyword} updateKeyword={updateKeyword}/>
                    <MenuItems items={menuItems}/>
                </section>
            </main>
        </React.Fragment>
    );
}

export default App;