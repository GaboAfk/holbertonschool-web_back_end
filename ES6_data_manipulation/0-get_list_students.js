class Student {
  constructor(id, firstName, location) {
    this.id = id;
    this.firstName = firstName;
    this.location = location;
  }
}

const s1 = new Student(1, 'Guillaume', 'San Francisco');
const s2 = new Student(2, 'James', 'Columbia');
const s5 = new Student(5, 'Serena', 'San Francisco');

export default function getlListStudents() {
  /* const array = [];
  array.push(s1, s2, s5);
  return array; */
  return [s1, s2, s5];
}

/* Each object should have three attributes: id (Number),
 firstName (String), and location (String).

The array contains the following students in order:

Guillaume, id: 1, in San Francisco
James, id: 2, in Columbia
Serena, id: 5, in San Francisco */
