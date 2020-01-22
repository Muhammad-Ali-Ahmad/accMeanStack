const express = require('express');
const router = express.Router();
const Message = require('../schemas/courses');


class CourseDTO {
    constructor(course) {
        this.id = course._id;
        this.courseName = course.courseName;
        this.courseDescription = course.courseDescription;
        this.date = course.date;
        this.attendees = course.attendees;
    }
}

router.get('/getCourse', async (req, res) => {
    try{
        let messageDoc = await Message.findByCourse(req.query.courseName)
        console.log('/getCourse -> ', messageDoc);
        res.json(messageDoc.map(doc => new CourseDTO(doc)));
    }catch(err){
        console.error('/getCourse -> ', err);
        throw (err);
    }
});

router.get('/getCourseById', (req, res) => {
    Message.findOne({_id: req.query.id}, (err, messageDoc) => {
        if (err) {
            console.error('/getCourseById -> ', err);
            throw (err);
        }
        console.log('/getCourseById -> ', messageDoc);
        res.json(new CourseDTO(messageDoc));
    });
});


router.post('/addCourse', (req, res) => {
    Message.addCourse(req.body.courseName, req.body.courseDescription, req.body.date, (err, messageDoc) => {
        if (err) {
            console.error('/addCourse -> ', err);
            throw (err);
        }
        console.log('/addCourse -> ', messageDoc);
        res.json();
    });
});

router.get('/deleteCourse', (req, res) => {
    Message.deleteCourse(req.query.id, (err, messageDoc) => {
        if (err) {
            console.error('/deleteCourse -> ', err);
            throw (err);
        }
        console.log('/deleteCourse -> ', messageDoc);
        res.json();
    });
});


router.post('/addPerson', (req, res) => {
    Message.addPerson(req.body.id, req.body.person, (err, messageDoc) => {
        if (err) {
            console.error('/addPerson -> ', err);
            throw (err);
        }
        console.log('/addPerson -> ', messageDoc);
        res.json();
    });
});

router.post('/removePerson', (req, res) => {
    Message.removePerson(req.body.id, req.body.person, (err, messageDoc) => {
        if (err) {
            console.error('/removePerson -> ', err);
            throw (err);
        }
        console.log('/removePerson -> ', messageDoc);
        res.json();
    });
});

router.post('/findPersonCourse', (req, res) => {
    Message.findPersonCourse(req.body.person, (err, messageDoc) => {
        if (err) {
            console.error('/findPersonCourse -> ', err);
            throw (err);
        }
        console.log('/findPersonCourse -> ', messageDoc);
        res.json(new CourseDTO(messageDoc));
    });
});


module.exports = router;