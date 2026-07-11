const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  maxSpellId: Number,
  maxMonsterId: Number,
});

module.exports = mongoose.model('Sequence', sequenceSchema); 