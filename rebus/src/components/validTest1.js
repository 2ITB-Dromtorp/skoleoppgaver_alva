import './App.css';

import Q1 from './question1';
import Q2 from './question2';
import Q3 from './question3';

import notValid from './notValid';
import completed from './completed';


const validTest1 = ({ setUser, setAnswer, setQuestion, setContent }) => {

    if (user = User1 || User2 || User3) {
        
    }

    function placeContentValid() {
        setContent(<Q1 />);
    }
      
    function placeContentInvalid() {
        setContent(<notValid />);
    }
      
    function placeContentCompleted() {
        setContent(<completed />);
    }

  return (
    <div>
        {content}
    </div>
  );
}

export default validTest1;
