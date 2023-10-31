import ConfettiExplosion from 'react-confetti-explosion';
import Confetti from 'react-dom-confetti';

function opg5(){

    function Confetti() {
        const [isExploding, setIsExploding] = React.useState(false);
        return <>{isExploding && <ConfettiExplosion />}</>;
    }
return <Confetti active={ someProp } config={ config }/>
}

export default App;