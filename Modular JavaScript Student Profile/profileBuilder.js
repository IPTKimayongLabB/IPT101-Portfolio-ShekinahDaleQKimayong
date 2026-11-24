//profileBuilder.js
function createStudentProfile(name, id, program, yearLevel, schoolYear){
    return{
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    };
}

const myProfile = createStudentProfile(
    "Shekinah Dale Q. Kimayong",
    6682,
    "BS in Information Technology",
    "Second Year",
    "2026-2027"
);

console.log(myProfile);