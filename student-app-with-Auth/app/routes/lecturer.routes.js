module.exports = (app) => {
    const lecturer = require('../controllers/lecturer.controller.js');
    const auth = require("../middleware/auth");

    // Create a new lecturer
    app.post('/lecturers',auth, lecturer.create);

    // Retrieve all lecturer
    app.get('/lecturers',auth, lecturer.findAll);

    // Retrieve a lecturer event with eventId
    app.get('/lecturers/:eventId',auth, lecturer.findOne);

    // Update a lecturer with _Id
    app.put('/lecturers/:eventId',auth, lecturer.update);

    // Delete a lecturer with _Id
    app.delete('/lecturers/:eventId',auth, lecturer.delete);
}