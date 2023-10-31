import './App.css';
import Oppgave4 from './Oppgave4';
import Oppgave5 from './Oppgave5';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className='container'>

          <div className='diDesk'>
            <div className='elev'>Elev1</div>
            <div className='elev'>Elev2</div>
          </div>

          <div className='diDesk'>
            <div className='elev'>Elev1</div>
            <div className='elev'>Elev2</div>
          </div>

          <div className='diDesk'>
            <div className='elev'>Elev1</div>
            <div className='elev'>Elev2</div>
          </div>

        </div>

        <div className='container'>

          <div className='triDesk'>
            <div className='elev'>Elev1</div>
            <div className='elev'>Elev2</div>
          </div>

          <div className='triDesk'>
            <div className='elev'>Elev1</div>
            <div className='elev'>Elev2</div>
          </div>

          <div className='triDesk'>
            <div className='elev'>Elev1</div>
            <div className='elev'>Elev2</div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
