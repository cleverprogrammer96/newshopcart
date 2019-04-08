const route =  require('express').Router();
const Users=require(__dirname+'/UserModel.js').Users;

route.get('/',(req,res)=>{
    Users.findAll().then((user)=>{
        res.send({success:'true',data:user})       
    })
    .catch(()=>{
        res.send({success:'false',data:null})
    })
})

route.post('/',(req,res)=>{
    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var email=req.body.email;
    var password=req.body.password;
    Users.findOrCreate(
        {
         where:{
            firstname:firstname,
             lastname:lastname,
             email:email,
             password:password
         }           
        }         
     ).then(([data,created])=>{
        if(created)
        {
            res.send({success:'true',message:'Entered successfully'});
        }
        else
        {
            res.send({success:'false',message:'user already exists'});
        }
        
     })
     .catch((error)=>{
         res.send({success:'false',message:error})
     })
     
    
})

route.get('/:id',(req,res)=>{
let id = req.params.id;
Users.findByPk(id).then((user) => {
   if(user)
   {
    res.send({success:true,data:user,message:'fetched successfully'})
   }else
   {
    res.send({success:false,data:null,message:'no user exists with this id'})
   }
   
  
  })
  .catch((error)=>{
      res.send({success:false,data:null,message:error})
  })
  
})

route.delete('/:id',(req,res)=>{
    let id = req.params.id;
    Users.findByPk(id).then((user) => {
        if(user)
        {
            Users.destroy({
                where: {
                    id:id
                }
            }).then(()=>{              
                res.send({success:true,message:'deleted successfully'})
            })
            .catch((error)=>{
                res.send({success:false,data:null,message:error})
            })
         
        }else
        {
         res.send({success:false,message:'no user exists with this id'})
        }             
       })
       .catch((error)=>{
           res.send({success:false,data:null,message:error})
       })
      
    })

//todo patch
module.exports={
    route
}
    