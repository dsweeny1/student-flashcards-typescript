import React from 'react';
import './Error.css';
import error from '../../assets/katie-torn-error.jpeg';

const Error = () => {
  return (
    <section className='error'>
      <img src={ error } data-cy='error-image' alt="Error message" />
      <h2>Something Went Wrong! Please Go Home!</h2>
    </section>
  );
};

export default Error;

const getStudents = async (students: []): Promise<typeof students[]> => {
  const options: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`https://final-project-api-aa6j.vercel.app/api/v1/students`,
  options
  )
  const data = await response.json()

  return data
}