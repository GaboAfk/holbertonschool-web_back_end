const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    const students = rows.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};

    for (const student of students) {
      const records = student.split(',');
      const field = records[records.length - 1].trim();
      const firstname = records[0].trim();

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
}

module.exports = countStudents;
