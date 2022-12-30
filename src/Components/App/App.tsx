import './App.css';
import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Students from '../Students/Students';
import Form from '../Form/Form'
import Header from '../Header/Header';
import Error from '../Error/Error'
// import { newStudent } from '../Form/Form'

export type StudentsProps = {
  id: string
  name: string
  favoriteBands: string
  favoriteFoods: string
  location: string
  pets: string
  image: string
}

const App = () => {
  const [students, setStudents] = useState<{id: string
    name: string
    favoriteBands: string
    favoriteFoods: string
    location: string
    pets: string
    image: string}[]>([])
  console.log(students)
  const [error, setError] = useState<boolean>(false)

  const getStudents = async (students: []): Promise<typeof students[]> => {
    const url =(`https://final-project-api-aa6j.vercel.app/api/v1/students`)
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await fetch(url,
      options
      )
      const data = await response.json()
  
      console.log('students', data)
      setStudents(data.students)
    } catch (error: any) {
      console.log('error', error.message)
      setError(true)
    }
    return students
  }

  useEffect(() => {
    getStudents([])
  }, [])

  const deleteStudent = async(id: string) => {
    console.log(id)
    const deletedStudent = students.filter(student => student.id !== id)
    try {
      const response = await fetch(`https://final-project-api-aa6j.vercel.app/api/v1/students/${id}`, {
        'method': 'DELETE'
      });
      if (!response.ok) {
        throw new (Error as any)(response.status)
      }
      const newData = await response.json();
      return newData;
    }
    catch (error: any) {
      console.log('error', error.message)
      setError(true)
  };
    setStudents(deletedStudent)
  }

  const addStudent = async(newStudent: any) => {
    console.log(newStudent)
    try {
      const response = await fetch('https://final-project-api-aa6j.vercel.app/api/v1/students', {
        method: 'POST',
        body: JSON.stringify({
          id: newStudent.id,
          name: newStudent.name,
          favoriteBands: newStudent.favoriteBands,
          favoriteFoods: newStudent.favoriteFoods,
          pets: newStudent.pets,
          location: newStudent.location,
          image: newStudent.image
        }),
        headers: {
          'Content-Type': 'application/JSON'
        }});
      if (!response.ok) {
        throw new (Error as any)(response.status)
      }
      const data = response.json();
      return data;
    }
    catch (error: any) {
      console.log('error', error.message)
      setError(true)
    }
    setStudents([...students, newStudent])
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
        path='/'>
            <>
            {error && <Error />}
            {!error && <Students 
            students={students}
            deleteStudent={deleteStudent}
            />}
            </>
        </Route>
        <Route 
        path='/students/form'>
            <>
              {error && <Error />}
             {!error && <Form 
              addStudent={addStudent}
              />}
            </>
        </Route>
        <Route 
        path='*' element={<Error />}
        />
      </Routes>
   </div>
  );
}

export default App;
