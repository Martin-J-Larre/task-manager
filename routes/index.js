const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

module.exports = function() {
    router.get('/', projectsController.projectHome);
    router.post('/new-project', projectsController.newProject);
    // router.get('/:id', projectsController.getOne);
    // router.put('/:id', projectsController.updateOne);
    // router.delete('/:id', projectsController.deleteOne);
   
    return router;
}