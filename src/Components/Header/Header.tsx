import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <h1>Student Flashcards</h1>
            <div className='header-button-container'>
                <Link to='/'>
                    <button className='home-button'>Home</button>
                </Link>
                <Link to='/students/form'>
                    <button className='new-student-form'>New Student Form</button>
                </Link>
            </div>
        </header>
    )
}

export default Header