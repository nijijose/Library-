const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav){
    // var books =[
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img: "tomjerry.jpg"
    //        // img: "/images/tomjerry.jpg"
            
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img: "harry-potter.jpg"
    //     },
    //     {
    //         title: 'Pathummayude Aadu',
    //         author: 'Vaikom Muhammad Basheer',
    //         genre: 'Drama',
    //         img: "basheer.jpg"
    //     }
    // ]
    
    // 1st method fpr creating a router for books
    // app.get('/books',function(req,res){
    //     res.render("books",{
    //         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
    //        title:'Library'
    //     });
    // });
    
    
    // 2nd method
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
               title:'Library',
               books
            });

        })
       
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send("hey i am a single book");
    
    // });
    
    
    booksRouter.get('/:id',function(req,res){
        const id =  req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });

        });
       
    });

    return booksRouter;
}

module.exports = router;