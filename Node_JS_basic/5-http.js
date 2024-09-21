const http = require('http');
const url = require('url');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load'));
  }

  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load'));
      }
      if (data) {
        const rows = data.toString('utf-8').split('\n').filter((row) => row.trim() !== '');
        const students = rows.slice(1);

        let result = `Number of students: ${students.length}\n`;
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
          result += `Number of students in ${field}: ${fields[field].length}. List: ${list.join(', ')}\n`;
        }
        resolve(result.trim());
      }
    });
  }
});

const port = 1245;

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
    return;
  }

  if (parsedUrl.pathname === '/students') {
    const databaseFile = process.argv[2];

    if (!databaseFile) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error: No database file provided');
      return;
    }

    try {
      const result = await countStudents(databaseFile);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`This is the list of our students\n${result}`);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});

module.exports = app;
