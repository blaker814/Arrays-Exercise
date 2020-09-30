import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort
export const getStudentsInCohort = cohort => students.filter(student => student.cohort === cohort)

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students
export const getFullTimeStudents = () => students.filter(student => student.fullTime === true)

// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor
export const getStudentsByInstructorId = instructorId => {
    return students.filter(student => student.instructorId === instructorId)
}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned
export const getPolyglotStudents = languageCount => {
    return students.filter(student => student.languages.length >= languageCount)
}

// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students
export const getAvailableInstructors = () => {
    return instructors.filter(instructor => {
        const hasStudents = students.find(student => student.instructorId === instructor.id)
        if (!hasStudents) {
            return instructor
        }
    })
}

// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method
export const getStudentsByLanguage = language => {
    return students.filter(student => {
        return student.languages.some(languageKnown => languageKnown === language)
    })
}

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
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