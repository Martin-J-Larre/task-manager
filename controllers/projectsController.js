const Projects = require('../models/Projects');
const slug = require('slug');

exports.projectHome = (req, res) => {
    res.render('index', {
        pageName: 'Projects'
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
        const url = slug(name).toLocaleLowerCase();
        const project = await Projects.create({ name, url });
        res.redirect('/');
    }
}