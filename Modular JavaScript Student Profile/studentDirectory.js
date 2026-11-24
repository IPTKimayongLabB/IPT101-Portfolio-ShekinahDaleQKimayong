//studentDirectory.js
const studentRecord = {
    name: "Shekinah Dale Q. Kimayong",
    id: 6682,
    program: "BS in Information Technology",
    yearLevel: "Second Year",
    schoolYear: "2026-2027",

    getEnrollmentDetails(semester, campus){
        return`[${this.schoolYear} | ${semester}] Student ${this.name} (ID: ${this.id}) from ${this.program} (${this.yearLevel}) is registered at ${campus}.`;
    }
};

console.log(studentRecord.getEnrollmentDetails("2nd Semester", "NLAC"));