import './header.css';

import Home from './components/home';
import List from './components/list';
import Chart from './components/chart';
import Add from './components/add';
import { useState } from 'react';
import axios from 'axios';

function TopNav() {
const [content, setContent] = useState(<Add />);

function placeContentHome() {
  setContent(<Home />);
}
    
function placeContentList() {
  setContent(<List />);
}
    
function placeContentAdd() {
  setContent(<Add />);
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