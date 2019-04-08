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
     ).then((data)=>{
         console.log(data)
        res.send({success:'true',message:'Entered successfully'});
     })
     .catch((error)=>{
         res.send({success:'false',message:error})
     })
     
    
})

module.exports={
    route
}
    