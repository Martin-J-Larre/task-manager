const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const projectsController = require('../controllers/projectsController');

module.exports = function() {
    router.get('/', projectsController.projectHome);
    router.get('/new-project', projectsController.newProject);
    router.post('/new-project', body('name').not().isEmpty().trim().escape(), projectsController.createNewProject);
    router.get('/projects/:url', projectsController.getProjectByUrl);    
    router.get('/project/:id', projectsController.edithProject);    
    return router;
}