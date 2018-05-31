const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const { Students, Campus } = require('../index')
const Op = Sequelize.Op

//GET all Campus
router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(results => res.json(results))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Campus.findById(req.params.id)

        .then(found => res.send(found))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Campus.create(req.body)
        .then(created => res.json(created))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
        .then(found => {
            return found.update(req.body)
        })
        .then(updated => res.json(updated))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
        .then(found => found.destroy())
        .then(deleted => res.status(204).send(null))
        .catch(next)
})
module.exports = router;