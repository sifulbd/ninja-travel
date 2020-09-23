import React, { useContext, useState, useEffect } from 'react';
import {homeData} from './homeData';
import { PlaceContext } from '../../App';
import { Link } from 'react-router-dom';
import PlaceInfo from '../PlaceInfo/PlaceInfo';

const Home = () => {
    const [place, setPlace] = useContext(PlaceContext);
    const[location, setLocation] = useState([]);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    });
    useEffect(() => {
        const matchLocation = homeData.filter(pd => pd.id === place);
        matchLocation.map( pb => setLocation(pb));        
    }, [place]);  
    
    const{id, title, imgUrl, info} = location;
    console.timeLog()
    return (
        <div className="nt-home img-bg" style={{backgroundImage: `url(${imgUrl})`}}>
            <div className="ftp-overlay"></div>
            <div className="container">
                <div className="row rw-height mdl section-separator">            
                    <div className="col-lg-6">
                        <h2>{title}</h2>
                        <p>{info}</p>  
                        <Link className='btn' to={`/destination/${id}`}>Booking</Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {homeData.map(prc => <PlaceInfo onClick={onclick} prc = {prc} key={prc.id}></PlaceInfo>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;