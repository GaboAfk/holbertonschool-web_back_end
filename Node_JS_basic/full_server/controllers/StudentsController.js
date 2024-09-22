import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];
    if (!databasePath) {
      response.status(500).send('Cannot load the database');
      return;
    }
    try {
      const data = await readDatabase(databasePath);
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      let responseText = ['This is the list of our students\n'];

      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      /* console.log(responseText); */
      response.status(200).send(responseText.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    if (!databasePath) {
      return response.status(500).send('Cannot load the database');
    }

    try {
      const data = await readDatabase(databasePath);
      const students = data[major];
      return response.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
