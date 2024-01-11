import './header.css';

export default function Update() {
    return (
        <div className="container">
            <form>
                <h1>New student form</h1>
                <label for="fname">Student ID:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label for="lname">First:</label><br />
                <input type="text" id="lname" name="lname" />
            </form> 
        </div>
    )
}