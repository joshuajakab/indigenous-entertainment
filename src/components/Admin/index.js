import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowsStart, addShowStart, deleteShowStart } from '../../redux/Shows/shows.actions';
import Button from '../defaultComponents/Button';
import Input from '../defaultComponents/Input';



const mapState = ({ showsData }) => ({
    shows: showsData.shows
});

const Admin = props => {
    const { shows } = useSelector(mapState);
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [venue, setVenue] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');


    useEffect(() => {
        dispatch(
            fetchShowsStart()
        )
    }, []);

    const resetForm = () => {
        setDate('');
        setVenue('');
        setLocation('');
        setTime('');
        setDescription('')
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addShowStart({
                date,
                venue,
                location,
                time, 
                description
            })
        );
        resetForm();
    };

    return (
        <div className='admin-container'>
            <div className='add-show-container'>
                <form onSubmit={handleSubmit} className='show-form'>
                    <h1>Add a Show</h1>
                    <Input
                        label='Date'
                        type='text'
                        value={date}
                        handleChange={e => setDate(e.target.value)}
                    />
                    <Input
                        label='Venue'
                        type='text'
                        value={venue}
                        handleChange={e => setVenue(e.target.value)}
                    />
                    <Input
                        label='Location'
                        type='text'
                        value={location}
                        handleChange={e => setLocation(e.target.value)}
                    />
                    <Input
                        label='Time'
                        type='text'
                        value={time}
                        handleChange={e => setTime(e.target.value)}
                    />
                    <Input
                        label='Description'
                        type='text'
                        value={description}
                        handleChange={e => setDescription(e.target.value)}
                    />
                    <Button type='submit'>
                        Add Show
                    </Button>
                </form>
            </div>

        </div>
    )
};

export default Admin;
