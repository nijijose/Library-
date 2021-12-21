const express = require('express');
const signupRouter = express.Router();

function router(nav){

    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:'Library'
        });
    });

    signupRouter.post('/new',function(req,res){
        res.send("Signup is successfull");
    });

    return signupRouter;
}

module.exports = router;