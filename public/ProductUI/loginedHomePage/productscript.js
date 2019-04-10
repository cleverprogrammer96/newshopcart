

function refreshList() {
   
    $.get('http://localhost:1156/api/products/', (data) => {
      $('#productList').empty()
   if(data.success)
   {
     
      for (let product of data.data) {
        
          $('#productList').append(
            `<li> ProductName : ${product.name}   Price : ${product.price} Quantity :  ${product.quantity} VendorName : ${product.vendorname} <button onclick="addToCart(${product.id})">Add To Cart</button></li>`
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
   // quantity=$('#quant').val();
    quantity=1;
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


   $('#logOut').click(()=>{
     
     alert('you are going to log out')
     localStorage.setItem('userid',null);
     window.location='http://localhost:1156/';
   })


  

