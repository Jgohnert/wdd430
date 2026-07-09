const mongoose = require('mongoose');

const spellSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    image: { type: String },
    damageType: { type: String },
    level: { type: String },
    school: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Spell', spellSchema);