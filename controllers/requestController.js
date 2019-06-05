const Request = require('../models/request.js');

class RequestController{

    constructor(){

    }


   
    create(req,res){
        console.log(req.bodyd)
        const {text,department_id,created_for} = req.body;
        let newRequest = {text,department_id,created_for};
        newRequest.created_by = req.user.id;
        new Request(newRequest).save().then(request =>{
            res.json({success:true,request})
        }).catch(err => res.json({success:false,error:err}))
    }


    update(req, res){
        Request.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
               .then(request =>{
                   res.json({success:true,request})
               }).catch(err => res.json({success:false,error:err}))
    }

    delete(req,res){
        Request.deleteOne({_id:req.params.id})
               .then(request =>{
                   res.json({success:true,request})
               }).catch(err => res.json({success:false,error:err}))
    }


    pending(req,res){
        Request.find({created_by:req.user.id,status:'pending'})
               .sort({created_at:-1})
               .then(requests =>{
                   res.json({success:true,requests})
               }).catch(err => res.json({success:false,error:err}))
    }


    approved(req,res){
        Request.find({created_by:req.user.id,status:'approved'})
              .sort({created_at:-1})
               .then(requests =>{
                   res.json({success:true,requests})
               }).catch(err => res.json({success:false,error:err}))
    }

    forApproval(req,res){
        User.find({department_id:req.params.departmentId})
            .sort({created_at:-1})
            .then(users =>{
                const userIds = users.map(user => user._id);
                Request.find({created_for:{$in:userIds},status:'pending'})
                       .then(requests =>{
                           res.json({success:true,requests})
                       }).catch(err => res.json({success:false,error:err}))
            }).catch(err => res.json({success:false,error:err}))
    }


}


module.exports = new RequestController();