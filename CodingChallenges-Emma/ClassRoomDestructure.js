function getStudents(classRoom) {
    let {hasTeachingAssistant, classList} = classRoom
    let teacher, teachingAsst, students;
    if(hasTeachingAssistant) {
       [teacher, teachingAsst, ...students]  = classList
    } else {
        [teacher, ...students] = classList
    }
    return students
}


const obj = {
    hasTeachingAssistant: true,
    classList: ['Teacher', 'TA', 'S1', 'S2']
}
getStudents(obj);