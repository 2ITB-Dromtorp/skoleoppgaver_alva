
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
                    <input type="radio" id="option1" name="option1" value={character} onChange={(e) => setCharacter(e.target.value)} /><br/>
                    <input type="radio" id="option2" name="option2" value={sexuality} onChange={(e) => setSexuality(e.target.value)} /><br />
                </div>
                <div className='row'>
                    <p>User: </p>
                    <input type="text" id="UserBox" name="UserBox" value={user} onChange={(e) => setUser(e.target.value)} /><br />
                </div>
                <div className='row'>
                    <input type="submit" id='submitBTN' value="Add data" />
                </div>
            </form>
            </div>
        </div>
    );
}

export default Q3;