import './header.css';
import Select from './select';
import Update from './update';
import Insert from './insert';
import { useState } from 'react';
import axios from 'axios';

function TopNav() {
const [content, setContent] = useState(<Select />);

function placeContentSelect() {
  setContent(<Select />);
}
    
function placeContentUpdate() {
  setContent(<Update />);
}
    
function placeContentInsert() {
  setContent(<Insert />);
}
    
function placeContentDelete() {
  setContent(<Select />);
}

return (
    <div>
        <div className='header'>
            <input className='button' type='button' value="Select" onClick={placeContentSelect}/>
            <input className='button' type='button' value="Update" onClick={placeContentUpdate}/>
            <input className='button' type='button' value="Insert" onClick={placeContentInsert}/>
            <input className='button' type='button' value="Delete" onClick={placeContentDelete}/>
        </div>
        <div className='requestContainer'>
        {content}
        </div>
    </div>
  );
};

export default TopNav;