import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

export const getStudentNames = () => {
    return students.map(student => `${student.firstName} ${student.lastName}`)
}

export const StudentList = () => {
    return students.map(student => {
        return `
            <div>
                <h1>${student.firstName} ${student.lastName}</h1>
                <h2>Cohort${student.cohort}</h2>
            </div>
        `
    }).join("")
}