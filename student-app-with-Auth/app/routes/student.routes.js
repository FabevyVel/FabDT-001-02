const auth = require("../middleware/auth");

module.exports = (app) => {
    const students = require('../controllers/student.controller.js');

    // Create a new students
    app.post('/students',auth, students.create);

    // Retrieve all students
    app.get('/students',auth, students.findAll);

    // Retrieve a single students with studentId
    app.get('/students/:studentId',auth, students.findOne);

    // Update a students with studentId
    app.put('/students/:studentId',auth, students.update);

    // Delete a students with studentId
    app.delete('/students/:studentId',auth, students.delete);
}