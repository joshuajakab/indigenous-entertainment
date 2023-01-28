import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './show.css';

const Show = (show) => {

    const [moreInfo, setMoreInfo] = useState();

    const {
        date,
        venue,
        location,
        time,
        description,
        documentID
    } = show;

    const infoToggle = () => {
        setMoreInfo(moreInfo => !moreInfo)
      }

    if (!documentID) return null;

    return (
        <div className='shows-container'>
            <div className='show-container'>
                <p className='show-info'>{date}</p>
                <div className='location-container'>
                    <p className='show-info'>{venue}</p>
                    <p className='show-info'>{location}</p>
                </div>
                <p className='show-info'>{time}</p>
            </div>
            {!moreInfo && 
            <p onClick={infoToggle} className='more-info'>More Info</p>
            }
            {moreInfo &&
            <div>
            <p onClick={infoToggle} className='more-info'>Less Info</p>
            <p className='show-desc'>{description}</p>
            </div>
            }
            <hr/>
        </div>
    )
}

export default Show;