const Q2 = ({ isOpen, onClose }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return (
        <div>
            <img src="./../src/Placeholder1.png"></img>
                <form onSubmit={handleSubmit}>
                    <div className="question">What is the purpose of the useEffect() hook in React?</div>
                    <div className="options">
                        <label>
                            <input
                            type="radio"
                            value="To handle form submissions"
                            checked={selectedOption === 'To handle form submissions'}
                            onChange={() => setSelectedOption('To handle form submissions')}
                            />
                            To handle form submissions
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="To perform side effects in functional components"
                            checked={selectedOption === 'To perform side effects in functional components'}
                            onChange={() => setSelectedOption('To perform side effects in functional components')}
                            />
                            To perform side effects in functional components
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="To manage global state"
                            checked={selectedOption === 'To manage global state'}
                            onChange={() => setSelectedOption('To manage global state')}
                            />
                            To manage global state
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="To create reusable components"
                            checked={selectedOption === 'To create reusable components'}
                            onChange={() => setSelectedOption('To create reusable components')}
                            />
                            To create reusable components
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

export default Q2;