const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

module.exports = function() {
    router.get('/', projectsController.projectHome);
    router.get('/new-project', projectsController.newProject);
    router.post('/new-project', projectsController.createNewProject);
    return router;
}