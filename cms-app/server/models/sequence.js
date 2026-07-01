const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  _id: { type: String },
  maxContactId: Number,
  maxDocumentId: Number,
  maxMessageId: Number
});

module.exports = mongoose.model('Sequence', sequenceSchema); 