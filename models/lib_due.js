const mongoose = require('mongoose');
const Schema =mongoose.Schema;

var dueSchema = new mongoose.Schema({
    Roll_no: {
        type: String,
        required:[true,"Category field is required"],
        unique:[true,"roll_no must be unique"]
        
    },
    
   
    full_name:{
        type:String,
    },

    lib_due:{
        type:Boolean,
        default:false
    }

});
const Due = mongoose.model("library_due", dueSchema);
module.exports = Due;