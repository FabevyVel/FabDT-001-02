const Events = require('../models/event-model.js');
const Reviews = require('../models/reviews-model.js');
const Lecturers = require('../models/lecturer-model.js');
const User = require('../models/user-model.js');

// Create and Save a new event
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.name) {
        return res.status(400).send({
            message: "student Name can not be empty"
        });
    }
    if (!req.body.hostDepartment) {
        return res.status(400).send({
            message: "student department can not be empty"
        });
    }
    if (!req.body.eventDate) {
        return res.status(400).send({
            message: "student batch can not be empty"
        });
    }

    const user = await User.findById(req.user.id);

    // Create a Students
    const event = new Events({
        name: req.body.name,
        hostDepartment: req.body.hostDepartment,
        date: req.body.eventDate,
        createdById: req.user.id,
        createdByName:user.username

    });

    // Initial lecturer count will be 0

    event.lecturerCount = 0

    event.eventId= event._id
    // Save event in the database
    event.save()
        .then(data => {
            data.eventId=data._id
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Event."
            });
        });
};

// Retrieve and return all event from the database.
exports.findAll = (req, res) => {
    Events.find()
        .then(value => {
            res.send(value);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Event."
            });
        });
};

// Find a single event with a eventId
exports.findOne = (req, res) => {
    Events.findById(req.params.eventId)
        .then(value => {
            if (!value) {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            res.send(value);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Error retrieving event with id " + req.params.eventId
            });
        });
};

// Update a event identified by the eventId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.params.eventId) {
        return res.status(400).send({
            message: "event  can not be empty"
        });
    }

    // Find event and update it with the request body
    Events.findByIdAndUpdate(req.params.eventId, {
        name: req.body.name,
        hostDepartment: req.body.hostDepartment,
        date: req.body.eventDate,
    }, { new: true })
        .then(value => {
            if (!value) {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            res.send(value);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Error updating event with id " + req.params.eventId
            });
        });
};

// Delete a event with the specified eventId in the request
exports.delete = async (req, res) => {

console.log("params", req.params.eventId)(

    Reviews.find({ eventId: { $eq: req.params.eventId } }).then(value => {
        console.log("all details", value[0]._id)

        if(value.length)

        Reviews.findByIdAndRemove(value[0]._id)
        .then(value => {

           
            if (!value) {
                console.log("Reviews not found with id " + req.params.eventId)
                
            }
            console.log("Reviews deleted successfully!")
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                console.log("Reviews not deleted successfully!")
            }
            console.log("Reviews not deleted successfully!")
        });


    },
     Lecturers.find({ eventId: { $eq: req.params.eventId } }).then(value => {
        console.log("all details", value[0]._id)

        if(value.length)

        Lecturers.findByIdAndRemove(value[0]._id)
        .then(value => {

           
            if (!value) {
                console.log("lecturers not found with id " + req.params.eventId)
                
            }
            console.log("lecturers deleted successfully!")
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                console.log("lecturers not deleted successfully!")
            }
            console.log("lecturers not deleted successfully!")
        });


    },

    Events.findByIdAndRemove(req.params.eventId)
        .then(value => {
            if (!value) {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            res.send({ message: "event deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "event not found with id " + req.params.eventId
                });
            }
            return res.status(500).send({
                message: "Could not delete event with id " + req.params.eventId
            });
        }))));

 
};
