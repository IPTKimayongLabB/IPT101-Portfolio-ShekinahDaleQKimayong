const personalInfo = {
    StudentName: "Kimayong, Shekinah Dale",
    IdNumber: "2026-6682",
    YearLevel: 2,
    Program: "Information Technology",

    // nested objectss
    enrolledCourses: {
        Course1: { courseTitle: "Integrative Programming", units: 3, finalGrade: 94 },
        Course2: { courseTitle: "App Development", units: 3, finalGrade: 95 },
        Course3: { courseTitle: "Networking 1", units: 3, finalGrade: 93 },
        Course4: { courseTitle: "Event Driven Programming", units: 3, finalGrade: 94 },
        Course5: { courseTitle: "Pathfit", units: 2, finalGrade: 97 },
        Course6: { courseTitle: "Art Appreciation", units: 3, finalGrade: 92 },
        Course7: { courseTitle: "Science, Technology and Society", units: 3, finalGrade: 95 }
    }
};

// Computation: direct object extraction
const C1 = personalInfo.enrolledCourses.Course1;
const C2 = personalInfo.enrolledCourses.Course2;
const C3 = personalInfo.enrolledCourses.Course3;
const C4 = personalInfo.enrolledCourses.Course4;
const C5 = personalInfo.enrolledCourses.Course5;
const C6 = personalInfo.enrolledCourses.Course6;
const C7 = personalInfo.enrolledCourses.Course7;

// Compute raw values
const totalUnits = C1.units + C2.units + C3.units + C4.units +
    C5.units + C6.units + C7.units;

const totalWeightedGrade = (C1.finalGrade * C1.units) +
    (C2.finalGrade * C2.units) +
    (C3.finalGrade * C3.units) +
    (C4.finalGrade * C4.units) +
    (C5.finalGrade * C5.units) +
    (C6.finalGrade * C6.units) +
    (C7.finalGrade * C7.units);

// Convert into two decimal places
const computedGWA = (totalWeightedGrade / totalUnits).toFixed(2);

// Determine letter grade using if-else n &&
let computedLetterGrade = "F (Failed)"; 

if (computedGWA >= 98 && computedGWA <= 100) {
    computedLetterGrade = "A";
} else if (computedGWA >= 94 && computedGWA < 98) {
    computedLetterGrade = "A-";
} else if (computedGWA >= 90 && computedGWA < 94) {
    computedLetterGrade = "B+";
} else if (computedGWA >= 87 && computedGWA < 90) {
    computedLetterGrade = "B";
} else if (computedGWA >= 83 && computedGWA < 87) {
    computedLetterGrade = "B-";
} else if (computedGWA >= 80 && computedGWA < 83) {
    computedLetterGrade = "C+";
} else if (computedGWA >= 77 && computedGWA < 80) {
    computedLetterGrade = "C";
} else if (computedGWA >= 73 && computedGWA < 77) {
    computedLetterGrade = "D";
}

personalInfo.gwa = computedGWA;
personalInfo.letterGrade = computedLetterGrade;

console.log(`Student: ${personalInfo.StudentName}`);
console.log(`ID Number: ${personalInfo.IdNumber}`);
console.log(`Year Level: ${personalInfo.YearLevel}`);
console.log(`Program: ${personalInfo.Program}`);
console.log(`Total Units: ${totalUnits}`)
console.log(`General Weighted Average: ${personalInfo.gwa}`);
console.log(`Letter Grade: ${personalInfo.letterGrade}`);

console.log("\n=Courses Enrolled=");
console.log(C1.courseTitle);
console.log(C2.courseTitle);
console.log(C3.courseTitle);
console.log(C4.courseTitle);
console.log(C5.courseTitle);
console.log(C6.courseTitle);
console.log(C7.courseTitle);
