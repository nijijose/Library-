const express = require('express');

const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    // var authors = [
    //     {
    //         name: 'Joseph Barbera',
    //         genre:'Cartoons',
    //         img:'barbera.jpg'
    //     },
    //     {
    //         name:'J K Rowling',
    //         genre:'Fantasy,drama, young adult fiction, tragicomedy, crime fiction',
    //         img:'rowling.jpg'
    //     },
    //     {
    //         name:'Vaikom Muhammad Basheer',
    //         genre:'Novel, short story, essays, memoirs',
    //         img:'basheer1.jpg'
    //     }
    // ];
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
               title:'Library',
               authors
            });

        });
        
    });

    authorsRouter.get('/:id',function(req,res){
        const id =  req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author
            });
        });
        
    });

    return authorsRouter;

}

module.exports = router;

