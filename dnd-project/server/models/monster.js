const mongoose = require('mongoose');

const monsterSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    image: { type: String },
    type: { type: String },
    hp: { type: String },
    armor: { type: String },
    vulnerabilities: [{ type: String }],
    immunity: [{ type: String }],
});

module.exports = mongoose.model('Monster', monsterSchema);