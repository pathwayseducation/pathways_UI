const mongoose = require('mongoose');

module.exports = {
    setupDatabase: function() {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
};
