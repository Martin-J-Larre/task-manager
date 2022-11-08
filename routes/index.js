const express = require('express');
const router = express.Router();
const { body } = require('express-validator/check');
const projectsController = require('../controllers/projectsController');

module.exports = function() {
    router.get('/', projectsController.projectHome);
    router.get('/new-project', projectsController.newProject);
    router.post(
        '/new-project',
        body('name').not().isEmpty().trim().escape(), 
        projectsController.createNewProject
        );

    return router;
}