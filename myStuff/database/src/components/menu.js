import { IoMenu } from "react-icons/io5";
import "./../css/menu.css";

const menu = ({ isOpen, onClose }) => {

    return (
        <div className={`side-panel ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={onClose}>Close</button>
            <button className="side-selection">Interresting data</button>
            <button className="side-selection">Add your data</button>
            <button className="side-selection"></button>
        </div>
    );
}

export default menu;