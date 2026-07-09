var express = require('express');
var router = express.Router();
const Spell = require('../models/spell');

router.get('/', (req, res, next) => {
  Spell.find()
    .then(spell => {
      res.status(200).json(spell);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

router.post('/', (req, res, next) => {
  const maxSpellId = sequenceGenerator.nextId("spells");

  const spell = new Spell({ 
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    damageType: req.body.damageType,
    level: req.body.level,
    school: req.body.school,
    description: req.body.description,
  });

  spell.save()
    .then(createdSpell => {
      res.status(201).json({
        message: 'Spell was added',
        spell: createdSpell
      });
    })
    .catch(error => {
       res.status(500).json({
          message: 'An error occurred',
          error: error
        });
    });
});

router.put('/:id', (req, res, next) => {
  Spell.findOne({ id: req.params.id })
    .then(spell => {
      spell.name = req.body.name,
      spell.image = req.body.image,
      spell.damageType = req.body.damageType,
      spell.level = req.body.level,
      spell.school = req.body.school,
      spell.description = req.body.description,

      Spell.updateOne({ id: req.params.id }, spell)
        .then(result => {
          res.status(204).json({
            message: 'Spell was updated'
          })
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Spell not found.',
        error: { spell: 'Spell not found'}
      });
    });
});

// router.delete("/:id", (req, res, next) => {
//   Spell.findOne({ id: req.params.id })
//     .then(spell => {
//       Spell.deleteOne({ id: req.params.id })
//         .then(result => {
//           res.status(204).json({
//             message: 'Spell was deleted'
//           });
//         })
//         .catch(error => {
//            res.status(500).json({
//            message: 'An error occurred',
//            error: error
//          });
//         })
//     })
//     .catch(error => {
//       res.status(500).json({
//         message: 'Spell not found.',
//         error: { spell: 'Spell not found'}
//       });
//     });
// });

module.exports = router; 