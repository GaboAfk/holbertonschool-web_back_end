export default function updateStudentGradeByCity(studentlist, city, newGrades) {
  return studentlist
    .filter((st) => st.location === city)
    .map((st) => {
      const srgrade = newGrades
        .filter((stg) => stg.studentId === st.id);
      // .map((grade) => grade.grade)[0];
      // const finalgrade = srgrade || 'N/A';
      const finalgrade = srgrade.length > 0 ? srgrade[0].grade : 'N/A';
      return { ...st, grade: finalgrade };
    });
}
/* export default function updateStudentGradeByCity(studentlist, city, newGrades) {
  return studentlist
    .filter((st) => st.location === city)
    .map((st) => {
      let srgrade = 'N/A';
      for (const stid of newGrades) {
        if (st.id === stid.studentId) {
          srgrade = stid.grade;
          break;
        }
      }
      return { ...st, grade: srgrade };
    });
} */
