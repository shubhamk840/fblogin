// Connection code for mongo and facebook authentication

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/facebook",{
    useUnifiedTopology :true,
    useNewUrlParser: true
});

var UserSchema = mongoose.Schema({
    uid: String,
    email: String,
    gender: String,
    name: String,
    pic: String
});

// const first = mongoose.model('User',UserSchema);

// const firstdoc = new first({
//     uid:"11",
//     email:"shubhamk840@gmail.com"
// });

// firstdoc.save();
module.exports = mongoose.model('user',UserSchema);
