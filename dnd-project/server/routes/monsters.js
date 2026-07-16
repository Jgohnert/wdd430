var express = require('express');
var router = express.Router();
const Monster = require('../models/monster');
const sequenceGenerator = require('../models/sequenceGenerator');

router.get('/', (req, res, next) => {
  Monster.find()
    .then(monster => {
      res.status(200).json(monster);
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
  const maxMonsterId = sequenceGenerator.nextId("monsters");

  const monster = new Monster({ 
    id: maxMonsterId,
    name: req.body.name,
    image: req.body.image,
    type: req.body.type,
    hp: req.body.hp,
    armor: req.body.armor,
    vulnerabilities: req.body.vulnerabilities,
    immunity: req.body.immunity
  });

  monster.save()
    .then(createdMonster => {
      res.status(201).json({
        message: 'Monster was added',
        monster: createdMonster
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
  Monster.findOne({ id: req.params.id })
    .then(monster => {
      monster.name = req.body.name,
      monster.image = req.body.image,
      monster.type = req.body.type,
      monster.hp = req.body.hp,
      monster.armor = req.body.armor,
      monster.vulnerabilities = req.body.vulnerabilities,
      monster.immunity = req.body.immunity

      Monster.updateOne({ id: req.params.id }, monster)
        .then(result => {
          res.status(204).json({
            message: 'Monster was updated'
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
        message: 'Monster not found.',
        error: { monster: 'Monster not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Monster.findOne({ id: req.params.id })
    .then(monster => {
      Monster.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: 'Monster was deleted'
          });
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Monster not found.',
        error: { monster: 'Monster not found'}
      });
    });
});

module.exports = router; 