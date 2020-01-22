const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: String,
    courseDescription: String,
    attendees: Array,
    date: Date
});

courseSchema.statics.findByCourse = function(course) {
    console.log(`findByCOurse [${course}]`)
    return this.find({ courseName: {$regex: course}});
}

courseSchema.statics.findById = function(id, cb) {
    return this.find({ _id: id}, cb);
}

courseSchema.statics.addCourse = function(course, courseDescription, date, cb) {
    this.create({
        courseName: course,
        courseDescription,
        date,
        auto: true
    }, cb);
};

courseSchema.statics.deleteCourse = function (id, cb) {
    this.deleteOne({
        _id: id
    }, cb);
};

courseSchema.statics.addPerson = function (id, person, cb) {
    this.find({
        _id: id
    }).update({
        $push: {attendees: person}
    }, cb);
};

courseSchema.statics.removePerson = function (id, person, cb) {
    this.find({
        _id: id
    }).update({
        $pull: {attendees: person}
    }, cb);
};

courseSchema.statics.findPersonCourse = function (person, cb) {
    return Message.find({ attendees: person }, cb);
};



const Message = mongoose.model('course', courseSchema);

module.exports=Message