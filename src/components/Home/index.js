import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowsStart } from '../../redux/Shows/shows.actions';
import Trees from '../../media/tree-divider.svg';
import Mtn from '../../media/mtn-divider.svg';
import Show from '../Shows/show';
import { useWindowWidthAndHeight } from '../../hooks/index';
import './styles.css';
import { Link } from 'react-router-dom';

const mapState = ({ showsData }) => ({
    shows: showsData.shows
});

const Home = props => {

    const dispatch = useDispatch();
    const { shows } = useSelector(mapState);
    const { data } = shows;
    const [width, height] = useWindowWidthAndHeight();
    const pageSize = 3;

    useEffect(() => {
        dispatch(
            fetchShowsStart(pageSize)
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
        <div className='home-container'>
            {width > 925 ?
                <img src='https://drive.google.com/uc?id=1FkYPir43zaQC8mVctf1sTrEUt7CMQyve' className='wide-home-img' alt='home' />
                :
                <img src='https://drive.google.com/uc?id=1dIb-3hzfeKQTgUOTh8DJWXFpJEvbSzOS' className='home-image' alt='home' />
            }
            <div className='news-container'>
                <img src={Trees} className='divider' alt='trees' />
                <div className='news-title'><h1 className='news-title-text'>What's Happening</h1></div>
                <div className='post-container'>
                    <p className='post-content'>
                        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                    </p>
                </div>
                <img src={Mtn} className='mtn-divider' alt='mtn' />
                <div className='gig-container'>
                    <h1 className='gig-title'>Upcoming Gigs</h1>
                    {data.map((show, pos) => {
                        const configShow = {
                            ...show
                        }

                        return (
                            <Show key={pos} {...configShow} />
                        )
                    })}
                    <Link to='/shows' className='more-gigs'><h1 className='more-gigs-title'>More Gigs</h1></Link>
                </div>
            </div>
        </div>
    )
};

export default Home;
