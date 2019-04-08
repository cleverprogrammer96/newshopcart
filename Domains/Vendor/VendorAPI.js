const route =  require('express').Router();
const Vendors=require(__dirname+'/VendorModel').Vendors;

route.get('/',(req,res)=>{
    Vendors.findAll().then((vendors)=>{
        res.send({success:'true',data:vendors})       
    })
    .catch(()=>{
        res.send({success:'false',data:null})
    })
})

route.post('/',(req,res)=>{
    var vendorName=req.body.name;
    Vendors.findOrCreate(
        {
         where:{
             name:vendorName
         }           
        }         
     ).then(([data,created])=>{
        if(created)
        {
            res.send({success:'true',message:'Entered successfully'});
        }
        else
        {
            res.send({success:'false',message:'Vendor already exists'});
        }
        
     })
     .catch((error)=>{
         res.send({success:'false',message:error})
     })
     
    
})

route.get('/:id',(req,res)=>{
let id = req.params.id;
Vendors.findByPk(id).then((vendor) => {
   if(vendor)
   {
    res.send({success:true,data:vendor,message:'fetched successfully'})
   }else
   {
    res.send({success:false,data:null,message:'no vendor exists with this id'})
   }
   
  
  })
  .catch((error)=>{
      res.send({success:false,data:null,message:error})
  })
  
})

route.delete('/:id',(req,res)=>{
    let id = req.params.id;
    Vendors.findByPk(id).then((vendor) => {
        if(vendor)
        {
            Vendors.destroy({
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
         res.send({success:false,message:'no vendor exists with this id'})
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
    