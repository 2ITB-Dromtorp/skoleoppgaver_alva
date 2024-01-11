import "./../css/topnav.css";
import { useNavigate } from 'react-router-dom';

const Topnav = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="topnav">
                <div className="report-error">
                    <button className="report-button" value="Rapporter Feil" onClick={() => navigate("/report-error")}>Rapporter Feil</button>
                </div>
            </div>
        </div>
    );
};

export default Topnav;