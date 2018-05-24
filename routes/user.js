const express = require('express');
const router = express.Router();
const ActionManager = require('../action/action-manager');
//Importing Action files
const {AddUser}=require('../action/user/add-user');
router.post('/',bearer.Handler,function(req,res,next){
    let action =new AddUser(req.body.user_name,password);
    ActionManager.execute(action).then(
        result=>{res.json({"message":"User added Successfully"})
    }).catch((error)=>{
        res.status(error.status||400).json({"error":error.message})
    });
});



module.exports=router;