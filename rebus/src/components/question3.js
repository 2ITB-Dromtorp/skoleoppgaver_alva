const Q3 = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <img src="./../src/Placeholder1.png"></img>
                <form onSubmit={handleSubmit}>
                    <div className="question">What is the maximum data transfer rate of NFC technology?</div>
                    <div className="options">
                        <label>
                            <input
                            type="radio"
                            value="106 kbps"
                            checked={selectedOption === '106 kbps'}
                            onChange={() => setSelectedOption('106 kbps')}
                            />
                            106 kbps
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="1 Mbps"
                            checked={selectedOption === '1 Mbps'}
                            onChange={() => setSelectedOption('1 Mbps')}
                            />
                            1 Mbps
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="10 Mbps"
                            checked={selectedOption === '10 Mbps'}
                            onChange={() => setSelectedOption('10 Mbps')}
                            />
                            10 Mbps
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="100 Mbps"
                            checked={selectedOption === '100 Mbps'}
                            onChange={() => setSelectedOption('100 Mbps')}
                            />
                            100 Mbps
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

export default Q3;