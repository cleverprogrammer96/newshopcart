const route =  require('express').Router();
const Products=require(__dirname+'/ProductModel.js').Products;

route.get('/',(req,res)=>{
    Products.findAll().then((product)=>{
        res.send({success:'true',data:product})       
    })
    .catch(()=>{
        res.send({success:'false',data:null})
    })
})

route.post('/',(req,res)=>{
    var productName=req.body.name;
    var price=parseFloat(req.body.price);
    var quantity=parseInt(req.body.quantity);
    Products.findOrCreate(
        {
         where:{
             name:productName,
             price:price,
             quantity:quantity
         }           
        }         
     ).then(([data,created])=>{
        if(created)
        {
            res.send({success:'true',message:'Entered successfully'});
        }
        else
        {
            res.send({success:'false',message:'product already exists'});
        }
        
     })
     .catch((error)=>{
         res.send({success:'false',message:error})
     })
     
    
})

route.get('/:id',(req,res)=>{
let id = req.params.id;
Products.findByPk(id).then((product) => {
   if(product)
   {
    res.send({success:true,data:product,message:'fetched successfully'})
   }else
   {
    res.send({success:false,data:null,message:'no product exists with this id'})
   }
   
  
  })
  .catch((error)=>{
      res.send({success:false,data:null,message:error})
  })
  
})

route.delete('/:id',(req,res)=>{
    let id = req.params.id;
    Products.findByPk(id).then((product) => {
        if(product)
        {
            Products.destroy({
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
         res.send({success:false,message:'no product exists with this id'})
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
    