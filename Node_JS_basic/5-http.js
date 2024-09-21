const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    const databaseFile = process.argv[2];
    if (!databaseFile) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error: No database file provided');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      try {
        const result = await countStudents(databaseFile);
        res.end(result);
      } catch (error) {
        res.end('Cannot load the database');
      }
    }
  }
});
app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});
module.exports = app;
