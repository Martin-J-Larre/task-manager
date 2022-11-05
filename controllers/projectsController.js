// exports.createOne = (req, res) => {
//     res.send('Index');
// }
// exports.getOne = (req, res) => {
//     res.send('Get One');
// }
// exports.getAll = (req, res) => {
//     res.render('index', {
//         pageName: 'Projects'
//     })
// }
// exports.updateOne = (req, res) => {
//     res.send('Update one');
// }
// exports.deleteOne = (req, res) => {
//     res.send('Delete One');
// }
// Projects-views
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
    console.log(req.body);
}