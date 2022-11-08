const Projects = require('../models/Projects');


exports.projectHome = async (req, res) => {
    const projectList = await Projects.findAll();
    res.render('index', {
        pageName: 'Projects',
        projectList
    })
}

exports.newProject = (req, res) => {
    res.render('newProject', {
        pageName: 'New Project'
    })
}

exports.createNewProject = async (req, res) => {
    const { name } = req.body;

    let errors = [];

    if (!name) {
        errors.push({'text': 'Add a name to the project'});
    }

    if (errors.length > 0) {
        res.render("newProject", {
            pageName: 'New Project',
            errors
        });
    } else {
        
        const project = await Projects.create({ name });
        res.redirect('/');
    }
}