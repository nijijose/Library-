const express = require('express');
const loginRouter = express.Router();


function router(nav){
    loginRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            title:'Library'
        });
    });

    loginRouter.post('/new',function(req,res){
        res.send("The login was successfull");
    });
    
    return loginRouter;

}

module.exports = router;
