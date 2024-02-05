const Q1 = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <img src="./../src/Placeholder1.png"></img>
                <form onSubmit={handleSubmit}>
                    <div className="question">What does NFC stand for?</div>
                    <div className="options">
                        <label>
                            <input
                            type="radio"
                            value="Network Field Communication"
                            checked={selectedOption === 'Network Field Communication'}
                            onChange={() => setSelectedOption('Network Field Communication')}
                            />
                            Network Field Communication
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="Near Frequency Communication"
                            checked={selectedOption === 'Near Frequency Communication'}
                            onChange={() => setSelectedOption('Near Frequency Communication')}
                            />
                            Near Frequency Communication
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="Network Frequency Communication"
                            checked={selectedOption === 'Network Frequency Communication'}
                            onChange={() => setSelectedOption('Network Frequency Communication')}
                            />
                            Network Frequency Communication
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="Near Field Communication"
                            checked={selectedOption === 'Near Field Communication'}
                            onChange={() => setSelectedOption('Near Field Communication')}
                            />
                            Near Field Communication
                        </label>
                    </div>
                    {!submitted && (
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    )}
            </form>
        </div>
    );
}

export default Q1;