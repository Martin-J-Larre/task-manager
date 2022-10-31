
const { application } = require('express');
const express = require('express');
const projectsController = require('../controllers/projectsController');
const router = express.Router();

module.exports = function() {
    router.post('/', projectsController.create);
    router.get('/', projectsController.getAll);
    router.get('/:id', projectsController.getOne);
    router.put('/:id', projectsController.updateOne);
    router.delete('/:id', projectsController.deleteOne);
   
    return router;
}