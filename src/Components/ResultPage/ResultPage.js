import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./ResultPage.css";
import h1 from "./../../assets/images/h1.png";
import h2 from "./../../assets/images/h2.png";
import h3 from "./../../assets/images/h3.png";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '500px',
    overflow: 'visiable',
    position: 'none'
  };
   
  const center = {
    lat: 21.4495874,
    lng: 91.9289897
  };

const ResultPage = () => {
    const [map, setMap] = React.useState(null);
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, []
    );
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, []);
    return (
        <div className="white-bg">
            <div className="ftp-ovderlay"></div>
            <div className="container">
                <div className="row rw-height mdl section-separator">            
                    <div className="col-lg-7">
                        <p>252 stays Apr 13-17 3 guests</p>
                        <h3>Stay in Cox’s Bazar</h3>
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={h1} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-7">
                                <div className="hotel-content">
                                    <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                    <ul>
                                        <li>4 guests   2 bedrooms   2 beds   2 baths</li>
                                        <li>Wif Air conditioning Kitchen</li>
                                        <li>Cancellation fexibility availiable</li>
                                    </ul>
                                     <p><FontAwesomeIcon icon={faStar} color="#FFAF38" /> <b>4.9 (20)</b>   <b>$34/</b>night  $167  total</p>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={h2} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-7">
                                <div className="hotel-content">
                                    <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                    <ul>
                                        <li>4 guests   2 bedrooms   2 beds   2 baths</li>
                                        <li>Wif Air conditioning Kitchen</li>
                                        <li>Cancellation fexibility availiable</li>
                                    </ul>
                                     <p><FontAwesomeIcon icon={faStar} color="#FFAF38" /> <b>4.9 (20)</b>   <b>$34/</b>night  $167  total</p>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5">
                                <img src={h3} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-lg-7">
                                <div className="hotel-content">
                                    <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                                    <ul>
                                        <li>4 guests   2 bedrooms   2 beds   2 baths</li>
                                        <li>Wif Air conditioning Kitchen</li>
                                        <li>Cancellation fexibility availiable</li>
                                    </ul>
                                     <p><FontAwesomeIcon icon={faStar} color="#FFAF38" /> <b>4.9 (20)</b>   <b>$34/</b>night  $167  total</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                        <LoadScript
                            googleMapsApiKey=""
                            >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                { /* Child components, such as markers, info windows, etc. */ }
                                <></>
                            </GoogleMap>
                        </LoadScript>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;