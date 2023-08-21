const mongoose = require('mongoose');
const url = <Add Your mongodb URL>;

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => console.log("Error :- ", error));
};  
