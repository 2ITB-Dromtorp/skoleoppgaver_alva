import './App.css';
import SearchBar from './components/topnaveng'
import './styles/topnav.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );
}

export default App;
