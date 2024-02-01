import './App.css';

import Q1 from './components/question1';
import Q2 from './components/question2';
import Q3 from './components/question3';

import validTest1 from './components/validTest1';
import validTest2 from './components/validTest2';
import validTest3 from './components/validTest3';

function App() {
  return (
    function App() {

      const [User, setUser] = useState("");
      const [answer, setAnswer] = useState("");
      const [question, setQuestion] = useState("");
      const [IsValid, setValid] = useState(false);

      if (User = "User1" || "User2" || "User3" ) {
        homepage = <
      } else {
        homepage
      }
    
      if (IsValid == true) {
        homePage = <Home />;
      } else {
        homePage = <LoggedOut />;
      }
    
      return (
        <Routes>
          <Route path="/question1" element={<validTest1 setUser={setUsername} setPassword={setPassword} />} />
          <Route path="/question2" element={<validTest2 Password={Password} Username={Username} setIsLogedIn={setIsLoggedIn}/>} />
          <Route path="/question3" element={<validTest3 />} />
        </Routes>
      );
    }
  );
}

export default App;
