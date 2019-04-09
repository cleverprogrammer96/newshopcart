function refreshList() {
   
    $.get('http://localhost:1156/api/products/', (data) => {
      $('#productList').empty()
   if(data.success)
   {
     
      for (let product of data.data) {
        
          $('#productList').append(
            `<li> ${product.name}  ${product.price}  ${product.quantity} ${product.vendorname}  <button onclick="addToCart(${product.id})">Add To Cart</button></li>`
          )
        }
   }  
   else
   {
     alert('something went wrong while fetching products')
   }   
    })
  }
  
  refreshList()

  function addToCart(productId)
  {
    
    let path='http://localhost:1156/api/carts';
    
    let userId=localStorage['userid'];
    quantity=123;
    
    if(userId===undefined)
    {
      console.log('user not logined');
    }
    else
    {


      $.post(path,{
        productId:productId,
        quantity:quantity,
        userId:userId
      },
      (data)=> {
       
        if(data.success)
        {         
          alert('added successfully')
        }
        else
        {
          alert('some errors..');
        }
      })
    }
  }


   


  

