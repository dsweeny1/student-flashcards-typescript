import React from 'react'
import StudentCard from '../StudentCard/StudentCard'
import './AllStudents.css'
import { StudentsProps } from '../App/App'
// import PropTypes from 'prop-types';

type StudentsType = {
    students: StudentsProps[]
    deleteStudent: any
}

const AllStudents: React.FC <StudentsType> = ({ students, deleteStudent }) => {
    const studentCards = students.map(student => {
        return (
            <section>
                <StudentCard 
                    image={student.image}
                    name={student.name}
                    favoriteBands={student.favoriteBands}
                    favoriteFoods={student.favoriteFoods}
                    pets={student.pets}
                    location={student.location}
                    deleteStudent={deleteStudent}
                    id={student.id}
                    key={student.id}
                    />
            </section>
        )
    })
    return (
        <section className='card-grid'>
            {studentCards}
        </section>
    )
}

export default AllStudents

// Students.propTypes = {
//     students: PropTypes.arrayOf(PropTypes.object),
//     deleteStudent: PropTypes.func.isRequired
// }