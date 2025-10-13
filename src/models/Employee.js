const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {type:String, required:true, unique:true},
  position: String,
  salary: Number,
  date_of_joining: Date,
  department: String,
  created_at: {type:Date, default:Date.now},
  updated_at: {type:Date, default:Date.now}
});
module.exports = mongoose.model('Employee', empSchema);
