import React, { useContext } from 'react';
import { PlaceContext } from '../../App';

const PlaceInfo = (props) => {
    const [place, setPlace] = useContext(PlaceContext);    
    const{id, title, imgUrl} = props.prc;
    return (
        <> 
            <div className="col-lg-4" onClick={() => setPlace(id)}>
                <img src={imgUrl} alt="" className="img-fluid" style={{minHeight:'200px', width: 'auto'}}/>
                <h3>{title}</h3>
            </div>       
        </>
    );
};

export default PlaceInfo;