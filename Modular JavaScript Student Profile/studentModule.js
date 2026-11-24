// studentModule.js

export const studentDetails = {
    name: "Shekinah Dale Q. Kimayong",
    id: 6682,
    program: "BS in Information Technology",
    yearLevel: "Second Year",
    schoolYear: "2026-2027"
};

export function printSummary(student, status){
    return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}