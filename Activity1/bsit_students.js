let bsit_students = {
    Student1: {
        studentName: "Kimayong, Shekinah Dale",
        idNumber: "2026-6682",
        yearLevel: 2,
        program: "Information Technology",
        enrolledCourses: {
            Course1: { courseTitle: "Integrative Programming", units: 3, finalGrade: 94 },
            Course2: { courseTitle: "App Development", units: 3, finalGrade: 95 },
            Course3: { courseTitle: "Networking 1", units: 3, finalGrade: 93 },
            Course4: { courseTitle: "Event Driven Programming", units: 3, finalGrade: 94 },
            Course5: { courseTitle: "Pathfit", units: 2, finalGrade: 97 },
            Course6: { courseTitle: "Art Appreciation", units: 3, finalGrade: 92 },
            Course7: { courseTitle: "Science, Technology and Society", units: 3, finalGrade: 95 }
        }
    },

    Student2: {
        studentName: "Gagan, Jyles Jea",
        idNumber: "2026-6774",
        yearLevel: 2,
        program: "Information Technology",
        enrolledCourses: {
            Course1: { courseTitle: "Integrative Programming", units: 3, finalGrade: 94 },
            Course2: { courseTitle: "App Development", units: 3, finalGrade: 95 },
            Course3: { courseTitle: "Networking 1", units: 3, finalGrade: 93 },
            Course4: { courseTitle: "Event Driven Programming", units: 3, finalGrade: 94 },
            Course5: { courseTitle: "Pathfit", units: 2, finalGrade: 97 },
            Course6: { courseTitle: "Art Appreciation", units: 3, finalGrade: 92 },
            Course7: { courseTitle: "Science, Technology and Society", units: 3, finalGrade: 95 }
        }
    },

    Student3: {
        studentName: "Dela Cruz, Shadrach Vincent",
        idNumber: "2026-6753",
        yearLevel: 2,
        program: "Information Technology",
        enrolledCourses: {
            Course1: { courseTitle: "Integrative Programming", units: 3, finalGrade: 94 },
            Course2: { courseTitle: "App Development", units: 3, finalGrade: 95 },
            Course3: { courseTitle: "Networking 1", units: 3, finalGrade: 93 },
            Course4: { courseTitle: "Event Driven Programming", units: 3, finalGrade: 94 },
            Course5: { courseTitle: "Pathfit", units: 2, finalGrade: 97 },
            Course6: { courseTitle: "Art Appreciation", units: 3, finalGrade: 92 },
            Course7: { courseTitle: "Science, Technology and Society", units: 3, finalGrade: 95 }
        }
    }
};

// ================= STUDENT 1 =================

const S1C1 = bsit_students.Student1.enrolledCourses.Course1;
const S1C2 = bsit_students.Student1.enrolledCourses.Course2;
const S1C3 = bsit_students.Student1.enrolledCourses.Course3;
const S1C4 = bsit_students.Student1.enrolledCourses.Course4;
const S1C5 = bsit_students.Student1.enrolledCourses.Course5;
const S1C6 = bsit_students.Student1.enrolledCourses.Course6;
const S1C7 = bsit_students.Student1.enrolledCourses.Course7;

const s1TotalUnits = S1C1.units + S1C2.units + S1C3.units + S1C4.units +
    S1C5.units + S1C6.units + S1C7.units;

const s1TotalWeightedGrade = (S1C1.finalGrade * S1C1.units) +
    (S1C2.finalGrade * S1C2.units) +
    (S1C3.finalGrade * S1C3.units) +
    (S1C4.finalGrade * S1C4.units) +
    (S1C5.finalGrade * S1C5.units) +
    (S1C6.finalGrade * S1C6.units) +
    (S1C7.finalGrade * S1C7.units);

const s1GWA = (s1TotalWeightedGrade / s1TotalUnits).toFixed(2);

let s1LetterGrade = "F (Failed)";

if (s1GWA >= 98 && s1GWA <= 100) {
    s1LetterGrade = "A";
} else if (s1GWA >= 94 && s1GWA < 98) {
    s1LetterGrade = "A-";
} else if (s1GWA >= 90 && s1GWA < 94) {
    s1LetterGrade = "B+";
} else if (s1GWA >= 87 && s1GWA < 90) {
    s1LetterGrade = "B";
} else if (s1GWA >= 83 && s1GWA < 87) {
    s1LetterGrade = "B-";
} else if (s1GWA >= 80 && s1GWA < 83) {
    s1LetterGrade = "C+";
} else if (s1GWA >= 77 && s1GWA < 80) {
    s1LetterGrade = "C";
} else if (s1GWA >= 73 && s1GWA < 77) {
    s1LetterGrade = "D";
}

bsit_students.Student1.totalUnits = s1TotalUnits;
bsit_students.Student1.gwa = s1GWA;
bsit_students.Student1.letterGrade = s1LetterGrade;

// ================= STUDENT 2 =====================

const S2C1 = bsit_students.Student2.enrolledCourses.Course1;
const S2C2 = bsit_students.Student2.enrolledCourses.Course2;
const S2C3 = bsit_students.Student2.enrolledCourses.Course3;
const S2C4 = bsit_students.Student2.enrolledCourses.Course4;
const S2C5 = bsit_students.Student2.enrolledCourses.Course5;
const S2C6 = bsit_students.Student2.enrolledCourses.Course6;
const S2C7 = bsit_students.Student2.enrolledCourses.Course7;

const s2TotalUnits = S2C1.units + S2C2.units + S2C3.units + S2C4.units +
    S2C5.units + S2C6.units + S2C7.units;

const s2TotalWeightedGrade = (S2C1.finalGrade * S2C1.units) +
    (S2C2.finalGrade * S2C2.units) +
    (S2C3.finalGrade * S2C3.units) +
    (S2C4.finalGrade * S2C4.units) +
    (S2C5.finalGrade * S2C5.units) +
    (S2C6.finalGrade * S2C6.units) +
    (S2C7.finalGrade * S2C7.units);

const s2GWA = (s2TotalWeightedGrade / s2TotalUnits).toFixed(2);

let s2LetterGrade = "F (Failed)";

if (s2GWA >= 98 && s2GWA <= 100) {
    s2LetterGrade = "A";
} else if (s2GWA >= 94 && s2GWA < 98) {
    s2LetterGrade = "A-";
} else if (s2GWA >= 90 && s2GWA < 94) {
    s2LetterGrade = "B+";
} else if (s2GWA >= 87 && s2GWA < 90) {
    s2LetterGrade = "B";
} else if (s2GWA >= 83 && s2GWA < 87) {
    s2LetterGrade = "B-";
} else if (s2GWA >= 80 && s2GWA < 83) {
    s2LetterGrade = "C+";
} else if (s2GWA >= 77 && s2GWA < 80) {
    s2LetterGrade = "C";
} else if (s2GWA >= 73 && s2GWA < 77) {
    s2LetterGrade = "D";
}

bsit_students.Student2.totalUnits = s2TotalUnits;
bsit_students.Student2.gwa = s2GWA;
bsit_students.Student2.letterGrade = s2LetterGrade;

// ================= STUDENT 3 =================

const S3C1 = bsit_students.Student3.enrolledCourses.Course1;
const S3C2 = bsit_students.Student3.enrolledCourses.Course2;
const S3C3 = bsit_students.Student3.enrolledCourses.Course3;
const S3C4 = bsit_students.Student3.enrolledCourses.Course4;
const S3C5 = bsit_students.Student3.enrolledCourses.Course5;
const S3C6 = bsit_students.Student3.enrolledCourses.Course6;
const S3C7 = bsit_students.Student3.enrolledCourses.Course7;

const s3TotalUnits = S3C1.units + S3C2.units + S3C3.units + S3C4.units +
    S3C5.units + S3C6.units + S3C7.units;

const s3TotalWeightedGrade = (S3C1.finalGrade * S3C1.units) +
    (S3C2.finalGrade * S3C2.units) +
    (S3C3.finalGrade * S3C3.units) +
    (S3C4.finalGrade * S3C4.units) +
    (S3C5.finalGrade * S3C5.units) +
    (S3C6.finalGrade * S3C6.units) +
    (S3C7.finalGrade * S3C7.units);

const s3GWA = (s3TotalWeightedGrade / s3TotalUnits).toFixed(2);

let s3LetterGrade = "F (Failed)";

if (s3GWA >= 98 && s3GWA <= 100) {
    s3LetterGrade = "A";
} else if (s3GWA >= 94 && s3GWA < 98) {
    s3LetterGrade = "A-";
} else if (s3GWA >= 90 && s3GWA < 94) {
    s3LetterGrade = "B+";
} else if (s3GWA >= 87 && s3GWA < 90) {
    s3LetterGrade = "B";
} else if (s3GWA >= 83 && s3GWA < 87) {
    s3LetterGrade = "B-";
} else if (s3GWA >= 80 && s3GWA < 83) {
    s3LetterGrade = "C+";
} else if (s3GWA >= 77 && s3GWA < 80) {
    s3LetterGrade = "C";
} else if (s3GWA >= 73 && s3GWA < 77) {
    s3LetterGrade = "D";
}

bsit_students.Student3.totalUnits = s3TotalUnits;
bsit_students.Student3.gwa = s3GWA;
bsit_students.Student3.letterGrade = s3LetterGrade;

//  PRINTING THE OUTPUT PER STUDENT 
console.log("===== STUDENT 1 =====");
console.log(`Student: ${bsit_students.Student1.studentName}`);
console.log(`ID Number: ${bsit_students.Student1.idNumber}`);
console.log(`Year Level: ${bsit_students.Student1.yearLevel}`);
console.log(`Program: ${bsit_students.Student1.program}`);
console.log(`Total Units: ${bsit_students.Student1.totalUnits}`);
console.log(`General Weighted Average: ${bsit_students.Student1.gwa}`);
console.log(`Letter Grade: ${bsit_students.Student1.letterGrade}`);
console.log("\n=Courses Enrolled=");
console.log(S1C1.courseTitle);
console.log(S1C2.courseTitle);
console.log(S1C3.courseTitle);
console.log(S1C4.courseTitle);
console.log(S1C5.courseTitle);
console.log(S1C6.courseTitle);
console.log(S1C7.courseTitle);

console.log("\n===== STUDENT 2 =====");
console.log(`Student: ${bsit_students.Student2.studentName}`);
console.log(`ID Number: ${bsit_students.Student2.idNumber}`);
console.log(`Year Level: ${bsit_students.Student2.yearLevel}`);
console.log(`Program: ${bsit_students.Student2.program}`);
console.log(`Total Units: ${bsit_students.Student2.totalUnits}`);
console.log(`General Weighted Average: ${bsit_students.Student2.gwa}`);
console.log(`Letter Grade: ${bsit_students.Student2.letterGrade}`);
console.log("\n=Courses Enrolled=");
console.log(S2C1.courseTitle);
console.log(S2C2.courseTitle);
console.log(S2C3.courseTitle);
console.log(S2C4.courseTitle);
console.log(S2C5.courseTitle);
console.log(S2C6.courseTitle);
console.log(S2C7.courseTitle);

console.log("\n===== STUDENT 3 =====");
console.log(`Student: ${bsit_students.Student3.studentName}`);
console.log(`ID Number: ${bsit_students.Student3.idNumber}`);
console.log(`Year Level: ${bsit_students.Student3.yearLevel}`);
console.log(`Program: ${bsit_students.Student3.program}`);
console.log(`Total Units: ${bsit_students.Student3.totalUnits}`);
console.log(`General Weighted Average: ${bsit_students.Student3.gwa}`);
console.log(`Letter Grade: ${bsit_students.Student3.letterGrade}`);
console.log("\n=Courses Enrolled=");
console.log(S3C1.courseTitle);
console.log(S3C2.courseTitle);
console.log(S3C3.courseTitle);
console.log(S3C4.courseTitle);
console.log(S3C5.courseTitle);
console.log(S3C6.courseTitle);
console.log(S3C7.courseTitle);