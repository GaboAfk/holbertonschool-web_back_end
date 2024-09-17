const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    const rows = data.split('\n');

    const students = rows.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};

    for (const student of students) {
      const records = student.split(',');
      const field = records[records.length - 1];
      const firstname = records[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const [field, list] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

/* const file = './database.csv';

countStudents(file); */
