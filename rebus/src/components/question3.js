
const Q3 = () => {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let jsonObject = {
            newQuestion: question,
            newAnswer: answer,
            newUser: user
        }

        axios.post('http://localhost:3001/additem', jsonObject)
        .then(function (response) {
            console.log(response);

            setQuestion('Q3');
            setAnswer('');
            setUser('');
        })
        .catch(function (error) {
            console.log(error)
        })
      };

    return (
        <div>
            <img src="./../src/Placeholder1.png"></img>
            <div className="options">
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <input type="radio" id="option1" name="option1" value={option1} onChange={(e) => setAnswer("A1")} /><br/>
                    <input type="radio" id="option2" name="option2" value={option2} onChange={(e) => setAnswer("A2")} /><br />
                </div>
                <div className='row'>
                    <input type="radio" id="option3" name="option3" value={option3} onChange={(e) => setAnswer("A3")} /><br/>
                    <input type="radio" id="option4" name="option4" value={option4} onChange={(e) => setAnswer("A4")} /><br />
                </div>
            </form>
            </div>
        </div>
    );
}

export default Q3;