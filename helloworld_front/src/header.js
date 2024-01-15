import './header.css';
import Select from './select';
import Update from './update';
import Insert from './insert';

import Home from './components/home';
import List from './components/list';
import Chart from './components/chart';
import Add from './components/add';
import { useState } from 'react';
import axios from 'axios';

function TopNav() {
const [content, setContent] = useState(<Home />);

function placeContentHome() {
  setContent(<Home />);
}
    
function placeContentList() {
  setContent(<List />);
}
    
function placeContentInsert() {
  setContent(<Insert />);
}
    
function placeContentDelete() {
  setContent(<Select />);
}

return (
    <div>
        <div className='requestContainer'>
        {content}
        </div>
    </div>
  );
};

export default TopNav;