import React from 'react';
import '../styles/Navbar.css';

function Navbar(){
    return (
        <div id='Navbar'>
            <div id="logo"><h1 id='logo'>RnR Code Works - Todo List</h1></div>
            
            <nav>
                <ul>
                    <li>Main</li>
                    <li>Add Item</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;