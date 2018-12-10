const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const watch_schema=mongoose.Schema({
    username:
    {
        type : String,
       
        required : true

    },
    cinema_name : {
        type : String,
        required : true

    },
    movie_name : {
        type : String,
        required : true

    },
    rating2 : {
        type : Number,
        //required : true

    }
});
var watchhist1 = mongoose.model("watchhist1", watch_schema);
module.exports = watchhist1;