// Filename : user.
const auth = require("../middleware/auth");

module.exports = (app) => {
    const user = require('../controllers/user-controller.js');

    // Create a new students
    app.post('/signup', user.signup);

    // Retrieve all students
    app.post('/login', user.login);

    // Retrieve a single students with studentId
    app.get('/me', auth, user.me); 

}
