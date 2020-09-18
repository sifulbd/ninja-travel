import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { homeData } from '../Home/homeData';
import Bookingform from '../Bookingform/Bookingform';

const Booking = () => {
    let { placeId } = useParams();
    const[location, setLocation] = useState([]);
    useEffect(() => {
        homeData.map( pb => setLocation(pb));        
    }, [placeId]);  
    
    const {title, info, imgUrl} = homeData[placeId];

    console.log()

    return (
        <div className="nt-home img-bg" style={{backgroundImage: `url(${imgUrl})`}}>
            <div className="ftp-overlay"></div>
            <div className="container">
                <div className="row rw-height mdl section-separator">            
                    <div className="col-lg-6">
                        <h2>{title}</h2>
                        <p>{info}</p>  
                    </div>
                    <div className="col-lg-6">
                        <Bookingform></Bookingform>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;