const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema({
  maxContactId: Number,
  maxDocumentId: Number,
  maxMessageId: Number
});

module.exports = mongoose.model('Sequence', sequenceSchema); 