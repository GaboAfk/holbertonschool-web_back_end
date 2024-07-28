export default function getStudentIdsSum(studentlist) {
  return studentlist.reduce((acc, student) => acc + student.id, 0);
}
