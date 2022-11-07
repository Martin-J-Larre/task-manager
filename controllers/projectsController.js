
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
exports.createNewProject = (req, res) => {
    const { name } = req.body;

    let errors = [];

    if (!name) {
        errors.push({'text': 'Add a name to the project'})
    }

    if (errors.length > 0) {
        res.render("newProject", {
            pageName: 'New Project',
            errors
        })
    }
}