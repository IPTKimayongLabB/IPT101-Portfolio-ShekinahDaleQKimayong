export const student1 = { name: "Angela Guerrero", id: 20261045, program: "BS Information Technology", yearLevel: "2nd Year", schoolYear: "2026-2027" };
export const student2 = { name: "Aina Mangosan", id: 20261046, program: "BS Information Technology", yearLevel: "2nd Year", schoolYear: "2026-2027" };
export const student3 = { name: "Janine Mabitazan", id: 20261047, program: "BS Information Technology", yearLevel: "2nd Year", schoolYear: "2026-2027" };

export function printSummary(student, status) {
  return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
}