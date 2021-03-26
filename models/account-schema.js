//node module requierments
const mongoose = require('mongoose'); //lets the mongoose package do its thing

const accountSchema = new mongoose.Schema(
{
    userID: {type: String, require: true, unique: true},
    serverID: {type: String, require: true, unique: false},
    campName: {type: String, require: true, unique: false},
    campDisctict: {type: String, default: 'City limits' ,require: true, unique: false},
    campLevel: {type: Number, default: 1, require: true, unique: false},
    campXp: {type: Number, default: 1, require: true, unique: false},
    campBalance: {type: Number, default: 1000, require: true, unique: false},
    merksAllowed: {type: Number, default: 2, require: true, unique: false},
})

const model = mongoose.model('AccountModels', accountSchema);
module.exports = model;