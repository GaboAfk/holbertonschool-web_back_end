export default function getListStudentIds(objectsArray) {
  if (Array.isArray(objectsArray)) return objectsArray.map((student) => student.id);
  return [];
}
