


module.exports = (app) => {
    const events = require('../controllers/event.controller.js');
    const auth = require("../middleware/auth");

    // Create a new events
    app.post('/events',auth, events.create);

    // Retrieve all events
    app.get('/events',auth, events.findAll);

    // Retrieve a single event with eventId
    app.get('/events/:eventId',auth, events.findOne);

    // Update a events with eventId
    app.put('/events/:eventId',auth, events.update);

    // Delete a event with eventId
    app.delete('/events/:eventId',auth, events.delete);
}