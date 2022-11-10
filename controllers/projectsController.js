const Projects = require('../models/Projects');


exports.projectHome = async (req, res) => {
    const projectList = await Projects.findAll();
    res.render('index', {
        pageName: 'Projects',
        projectList
    })
}

exports.newProject = async (req, res) => {
    const projectList = await Projects.findAll();
    res.render('newProject', {
        pageName: 'New Project',
        projectList
    })
}

exports.createNewProject = async (req, res) => {
    const projectList = await Projects.findAll();

    const { name } = req.body;

    let errors = [];

    if (!name) {
        errors.push({'text': 'Add a name to the project'});
    }

    if (errors.length > 0) {
        res.render("newProject", {
            pageName: 'New Project',
            projectList,
            errors
        });
    } else {
        
        const project = await Projects.create({ name });
        res.redirect('/');
    }
}

exports.getProjectByUrl = async (req, res, next) => {
    const projectList = await Projects.findAll();
    const project = await Projects.findOne({
        where: {
            url: req.params.url
        }
    });
    if (!project) {
        return next();
    }
    res.render('tasks', {
        pageName: 'Project Tasks',
        project,
        projectList
    })
}