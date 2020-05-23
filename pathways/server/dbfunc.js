const schema = require('./schema');
const bcrypt = require('bcrypt');

var createUser = function(userObj, done) {
    var user = new schema.User({
        username: userObj.username,
        email: userObj.email,
        password: userObj.password,
        bio: userObj.bio,
        education: userObj.education,
        classOf: userObj.classOf 
    });
    user.save((err, data) => {
        if(err) done(err, data);
        done(null, data);
    });
};

var findUserById = function(userId, done) {
    schema.User.findById({_id: userId}, (err, data) => {
        if(err) done(err, null);
        done(null, data);
    });
};

var findAndVerifyUserByName = function(username, password, done) {
    schema.User.findOne({username: username}, (err, user) => {
        console.log('User ' + username + ' attempted to log in.');
        if(err) return done(err);
        if(!user) return done(null, false);
        if(!bcrypt.compareSync(password, user.password)) return done(null, false);
        return done(null, user);
    });
};


module.exports = {
    createUser,
    findUserById,
    findAndVerifyUserByName
};
