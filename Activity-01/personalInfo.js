let personalInfo = {
    StudentName: "Kimayong, Shekinah Dale",
    IdNumber: "2026-6682",
    YearLevel: 2,
    Program: "Information Technology"
};

let courseEnrolled = [
    { course: "Integrative Programming", grade: 94 },
    { course: "App Development", grade: 95 },
    { course: "Networking 1", grade: 93 },
    { course: "Event Driven Programming", grade: 94 },
    { course: "Pathfit", grade: 97 },
    { course: "Art Appreciation", grade: 92 },
    { course: "Science, Technology and Society", grade: 95}
];

let totalGrades = courseEnrolled[0].grade +
    courseEnrolled[1].grade +
    courseEnrolled[2].grade +
    courseEnrolled[3].grade +
    courseEnrolled[4].grade +
    courseEnrolled[5].grade +
    courseEnrolled[6].grade;

let average = totalGrades / 7;

console.log("Student:", personalInfo.StudentName);
console.log("ID Number:", personalInfo.IdNumber);
console.log("Year Level:", personalInfo.YearLevel);
console.log("Program:", personalInfo.Program);
console.log("Average Grade:", average); 

if (average >= 98) {
    console.log("Letter Grade: A");
} else if (average >= 94) {
    console.log("Letter Grade: A-");
} else if (average >= 90) {
    console.log("Letter Grade: B+");
} else if (average >= 87) {
    console.log("Letter Grade: B");
} else if (average >= 83) {
    console.log("Letter Grade: B-");
} else if (average >= 80) {
    console.log("Letter Grade: C+");
} else if (average >= 77) {
    console.log("Letter Grade: C");
} else if (average >= 73) {
    console.log("Letter Grade: D");
} else { 
    console.log("Letter Grade: F");
}

console.log("\n=Courses Enrolled=");
console.log(courseEnrolled[0].course);
console.log(courseEnrolled[1].course);
console.log(courseEnrolled[2].course);
console.log(courseEnrolled[3].course);
console.log(courseEnrolled[4].course);
console.log(courseEnrolled[5].course);