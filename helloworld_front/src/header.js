import './header.css';

import Home from './components/home';
import List from './components/list';
import attchart2 from './components/attchart';
import ChaChart from './components/chachart';
import Add from './components/add';
import Menu from './components/menu';
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
    
function placeContentAdd() {
  setContent(<Add />);
}

return (
    <div>
        <div className='requestContainer'>
          <Menu
            onHomeClick={placeContentHome}
            onListClick={placeContentList}
            onAddClick={placeContentAdd}
          />
          {content}
        </div>
    </div>
  );
};

export default TopNav;