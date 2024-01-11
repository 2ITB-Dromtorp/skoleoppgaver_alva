import "./../css/bottomnav.css";

const Bottomnav = () => {
    return (
        <div>
            <div className="bottomnav">
                <div className="about-us">
                    <h2>
                        Om oss:
                    </h2>
                    <ul>
                        <li>
                            Adresse: Eksempelveien 1
                        </li>
                        <li>
                            Telefon: 123 45 678
                        </li>
                        <li>
                            Epost: ViTrengerHjelp@eksempel.com
                        </li>
                    </ul>
                </div>
                <div className="navigation">
                    <h2>
                        Navigasjon:
                    </h2>
                    <ul>
                        <li>
                            Rapporter en feil
                        </li>
                        <li>
                            Terms of Service
                        </li>
                        <li>
                            FAQ
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bottomnav;