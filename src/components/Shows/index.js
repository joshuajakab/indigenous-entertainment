import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowsStart } from '../../redux/Shows/shows.actions';
import Show from './show';
import './shows.css';

const mapState = ({ showsData }) => ({
    shows: showsData.shows
});

const Shows = ({ }) => {
    const dispatch = useDispatch();
    const { shows } = useSelector(mapState);
    const { data } = shows;

    useEffect(() => {
        dispatch(
            fetchShowsStart()
        )
    }, []);

    if (!Array.isArray(data)) return null;

    if (data.length < 1) {
        return (
            <div>
                <h2>No upcoming shows.</h2>
            </div>
        )
    };


    return (
        <div className='calendar-container'>
            <div className='carousel-container'>
                <Carousel dynamicHeight='true'>
                    <div className='gig-img-container'>
                        <img src='https://drive.google.com/uc?id=1cEdSTq_KRkdPjbrAbEUg0eVAg4BHLCqw' alt='gig-1' />
                    </div>
                    <div className='gig-img-container'>
                        <img src='https://drive.google.com/uc?id=1dN_d65OOnFlCEix-v8WQ3uTcDCi_JbrT' alt='gig-2' />
                    </div>
                    <div className='gig-img-container'>
                        <img src='https://drive.google.com/uc?id=1dKqit_QBBYkV5F1NxLvrStf-mlCy3BNY' alt='gig-3' />
                    </div>
                    <div className='gig-img-container'>
                        <img src='https://drive.google.com/uc?id=1idRS2W02YwyMXIaciAJozlc4rpvj_9ul' alt='gig-4' />
                    </div>


                </Carousel>
            </div>
            <h1 className='calendar-title'>Upcoming Shows</h1>
            <div className='upcoming-container'>
                {data.map((show, pos) => {
                    const configShow = {
                        ...show
                    }

                    return (
                        <Show key={pos} {...configShow} />
                    )
                })}
            </div>

        </div>
    )
};

export default Shows;
