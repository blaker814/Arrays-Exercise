import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

export const getStudentsInCohort = cohort => students.filter(student => student.cohort === cohort)

export const getFullTimeStudents = () => students.filter(student => student.fullTime === true)

export const getStudentsByInstructorId = instructorId => {
    return students.filter(student => student.instructorId === instructorId)
}

export const getPolyglotStudents = languageCount => {
    return students.filter(student => student.languages.length >= languageCount)
}

export const getAvailableInstructors = () => {
    return instructors.filter(instructor => {
        const hasStudents = students.find(student => student.instructorId === instructor.id)
        if (!hasStudents) {
            return instructor
        }
    })
}

export const getStudentsByLanguage = language => {
    return students.filter(student => {
        return student.languages.some(languageKnown => languageKnown === language)
    })
}

export const getStudentsByLanguages = languages => {
    return students.filter(student => {
        let arrayOfMatches = [];
        languages.forEach(language => {
            const knowTheLanguage = student.languages.find(knownLanguage => knownLanguage === language)
            
            if (knowTheLanguage) {
                arrayOfMatches.push(true)
            } else {
                arrayOfMatches.push(false)
            }

        })

        const allMatch = arrayOfMatches.find(match => match === false)
        if(allMatch === undefined) {
            arrayOfMatches = [];
            return true
        } else {
            arrayOfMatches = [];
            return false
        }
    })
}