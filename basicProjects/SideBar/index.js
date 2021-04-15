import React from 'react' // you can import the hooks or use React.useState and import the hooks manually 
import ReactDOM from 'react-dom'
// react Notes: remember each component will title need to be capitalized
import SideBarApp from './SideBarApp.js'// css important 
import {AppProvider} from './context.js';
import SideBar from './SideBar.css';

// the context provider needs to wrap the entire application in order for it to render it on the html page
ReactDOM.render(<AppProvider><SideBarApp/></AppProvider>, document.querySelector('#root'));
// react component names always start with a capital letter