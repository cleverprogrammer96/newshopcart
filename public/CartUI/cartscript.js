let totalPrice=0;
function refreshList() {
   let userId=localStorage['userid'];
   let path='http://localhost:1156/api/carts/'+userId;
    $.get(path, (data) => {
      $('#productList').empty()
   if(data.success)
   {
     
      for (let product of data.data) {
        
        let path ='http://localhost:1156/api/products/'+product.productId;
       
        $.get(path,(mproduct)=>{
         
          $('#productList').append(
            `<li> Name : ${mproduct.data.name}   Quantity : ${product.quantity} VendorName : ${mproduct.data.vendorname} PriceOfProduct : ${mproduct.data.price}  TotalPrice : ${product.quantity*mproduct.data.price} </li>`
          )
        })
       
      } 
        
   }  
   else
   {
     alert('something went wrong while fetching products')
   }   
    })
  }
  refreshList();

// function populateDropDown()
// {
//   $.get('http://localhost:1156/api/vendors/', (data) => {
     
//     if(data.success)
//     {
//        for (let vendor of data.data) {
//            $('#vendorDropDown').append(
//              `<option value=${vendor.id}> ${vendor.name}</option>`
//            )
//          }
//     } 
        
//      })
// }
//   function deleteThisProduct(id)
//   {
//     let path='http://localhost:1156/api/products/'+id;
//     $.ajax({
//       url: path,
//       type: 'DELETE',
//       success:(data) => {
//         if(data.success)
//         {
//           alert('deleted successfully...')
//         }
      
       
//           refreshList()
       
//       }
//   });
    
//   }
//   refreshList()
//   populateDropDown()

//   $('#addProductButton').click(() => {
   
//     let newProduct={};
//     newProduct.name=$('#productName').val();
//     newProduct.price=$('#price').val();
//     newProduct.quantity=$('#quantity').val();
//     newProduct.vendorId=parseInt($('#vendorDropDown').val())
//     newProduct.vendorname=$('#vendorDropDown option:selected').text()

  
//     $.post(
//        'http://localhost:1156/api/products/',newProduct,  
//       (data) => {
//         if (data.success) {
//           refreshList()
//           alert('added successfully...')
//         } else {
//           alert(data.message)
//         }
//       }
//     )
//   })

