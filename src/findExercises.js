import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

export const getStudentById = id => students.find(student => student.id === id)

export const getInstructorById = id => instructors.find(instructor => instructor.id === id)

export const getStudentByLastName = lastName => {
    return students.find(student => student.lastName.toUpperCase() === lastName.toUpperCase())
}

export const getStudentByName = fullName => {
    return students.find(student => {
        return `${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}` === fullName.toUpperCase()
    })
}

export const getInstructorOfStudent = studentId => {
    const studentObj = students.find(student => student.id === studentId)
    return instructors.find(instructor => instructor.id === studentObj.instructorId)
}

export const getStudentWithMostLangs = () => {
    const sortedStudents = students.sort((studentA, studentB) => {
        const numLangsA = studentA.languages.length
        const numLangsB = studentB.languages.length

        let comparison = 0;
        if (numLangsA > numLangsB) {
            comparison = -1;
        } else if (numLangsA < numLangsB) {
            comparison = 1
        }
        return comparison
    })
    return sortedStudents[0]
}