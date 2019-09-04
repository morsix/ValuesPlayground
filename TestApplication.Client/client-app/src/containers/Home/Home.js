import React, { useEffect } from 'react';
import "./Home.css";
import tbLogo from '../../assets/images/logo.png';

const Home = () => {

    useEffect(() => {
        document.body.style.backgroundImage = "url(\"https://www.trakglobalgroup.com/wp-content/uploads/2018/03/DFP.png\")";
        document.body.style.backgroundRepeata = "no-reapeat";
        document.body.style.backgroundSize = "cover";

        return () => {
            document.body.style.backgroundImage = null;
        }
    }, [])

    return <div className="img-container">
                <img src={tbLogo} alt="Tb logo" />
            </div>
}

export default Home;
