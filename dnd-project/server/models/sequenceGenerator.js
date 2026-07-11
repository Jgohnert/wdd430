var Sequence = require('../models/sequence');

var maxSpellId;
var maxMonsterId;
var sequenceId = null;

function SequenceGenerator() {

  Sequence.findOne().then(sequence => {
    sequenceId = sequence._id;
    maxSpellId = sequence.maxSpellId;
    maxMonsterId = sequence.maxMonsterId;
    }).catch(error => {
      console.error('error:', error);
    });
};

SequenceGenerator.prototype.nextId = function(collectionType) {
  
  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'spells':
      maxSpellId++;
      updateObject = {maxSpellId: maxSpellId};
      nextId = maxSpellId;
      break;
    case 'monsters':
      maxMonsterId++;
      updateObject = {maxMonsterId: maxMonsterId};
      nextId = maxMonsterId;
      break;
    default:
      return -1;
  }

  Sequence.updateOne({_id: sequenceId}, {$set: updateObject},)
    .then(() => {})
    .catch(error => {
      console.error('Sequence update error:', error);
    });
    
  return nextId;
}

module.exports = new SequenceGenerator();
