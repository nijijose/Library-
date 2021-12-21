const express = require('express');
const authoradminRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    authoradminRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library'
        });
    });

    authoradminRouter.post('/add',function(req,res){
        var list = {
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }

        var author = Authordata(list);
        author.save();
        res.redirect('/authors');
    

    });

   
    return authoradminRouter;

}

module.exports = router;