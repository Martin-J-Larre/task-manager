exports.createOne = (req, res) => {
    res.send('Index');
}
exports.getOne = (req, res) => {
    res.send('Get One');
}
exports.getAll = (req, res) => {
    res.render('index', {
        pageName: 'Projects'
    })
}
exports.updateOne = (req, res) => {
    res.send('Update one');
}
exports.deleteOne = (req, res) => {
    res.send('Delete One');
}