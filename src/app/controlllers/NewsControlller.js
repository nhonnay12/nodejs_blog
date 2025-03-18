class NewsController{
    //GET News
    index(req, res) {
        res.render('news');
    }

    //GET :slug
    show(req, res) {
        res.send('New Detal!!!')
    }
}
module.exports = new NewsController;