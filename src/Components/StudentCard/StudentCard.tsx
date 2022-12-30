import React, { useState } from 'react'
import './StudentCard.css'
// import PropTypes from 'prop-types';

type StudentProps = {
    id: string
    name: string
    favoriteBands: string
    favoriteFoods: string
    location: string
    pets: string
    image: string
    deleteStudent: any
}

const StudentCard: React.FC<StudentProps> = ({ id, name, favoriteBands, favoriteFoods, location, pets, image, deleteStudent }) => {
    const [flip, setFlip] = useState(false)
        return (
            <div>
            <div className={`card ${flip ? 'flip' : ''}`} id={id} key={id}>
                <div className='front' onClick={() => setFlip(!flip)}>
                    {image && <img src={image} alt={`${name} picture`}/>}
                    {!image && <img src={'https://ca.slack-edge.com/T029P2S9M-U02Q8JAJW0P-g654fec14191-512'} alt={'no picture available'}/>}
                </div>
                <div className='back' onClick={() => setFlip(!flip)}>
                    <h2 className='name'>Name: {name}</h2>
                    <h3 className='bands'>Favorite Bands: {favoriteBands}</h3>
                    <h3 className='food'>Favorite Foods: {favoriteFoods}</h3>
                    <h3 className='pets'>Pets: {pets}</h3>
                    <h3 className='location'>Location: {location}</h3>
                </div>
            </div>
                <button className='delete-button' onClick={() => deleteStudent(id)}>🗑</button>
            </div>
        )
}

export default StudentCard

// StudentCard.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     favoriteBands: PropTypes.string.isRequired, 
//     favoriteFoods: PropTypes.string.isRequired, 
//     location: PropTypes.string.isRequired, 
//     pets: PropTypes.string.isRequired, 
//     image: PropTypes.string, 
//     deleteStudent: PropTypes.func
// }