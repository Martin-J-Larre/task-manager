const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

module.exports = function() {
    router.post('/', projectsController.createOne);
    router.get('/', projectsController.getAll);
    router.get('/:id', projectsController.getOne);
    router.put('/:id', projectsController.updateOne);
    router.delete('/:id', projectsController.deleteOne);
   
    return router;
}