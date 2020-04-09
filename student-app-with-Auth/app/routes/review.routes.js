module.exports = (app) => {
    const reviews = require('../controllers/reviews.controller.js');
    const auth = require("../middleware/auth");

    // Create a new reviews
    app.post('/reviews',auth, reviews.create);

    // Retrieve all reviews
    app.get('/reviews',auth, reviews.findAll);

    // Retrieve a single reviews with eventId
    app.get('/reviews/:reviewId',auth, reviews.findOne);

    // Update a Note with reviews
    app.put('/reviews/:reviewId',auth, reviews.update);

    // Delete a Note with reviews
    app.delete('/reviews/:reviewId',auth, reviews.delete);
}