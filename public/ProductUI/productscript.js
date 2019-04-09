function refreshList() {
   
    $.get('http://localhost:1156/api/products/', (data) => {
      $('#productList').empty()
   if(data.success)
   {
     
      for (let product of data.data) {
          $('#productList').append(
            `<li> ${product.name}  ${product.price}  ${product.quantity} ${product.vendorname}  <button onclick="deleteThisProduct(${product.id})">X</button></li>`
          )
        }
   }  
   else
   {
     alert('something went wrong while fetching products')
   }   
    })
  }

function populateDropDown()
{
  $.get('http://localhost:1156/api/vendors/', (data) => {
     
    if(data.success)
    {
       for (let vendor of data.data) {
           $('#vendorDropDown').append(
             `<option value=${vendor.id}> ${vendor.name}</option>`
           )
         }
    } 
        
     })
}
  function deleteThisProduct(id)
  {
    let path='http://localhost:1156/api/products/'+id;
    $.ajax({
      url: path,
      type: 'DELETE',
      success:(data) => {
        if(data.success)
        {
          alert('deleted successfully...')
        }
      
       
          refreshList()
       
      }
  });
    
  }
  refreshList()
  populateDropDown()

  $('#addProductButton').click(() => {
   
    let newProduct={};
    newProduct.name=$('#productName').val();
    newProduct.price=$('#price').val();
    newProduct.quantity=$('#quantity').val();
    newProduct.vendorId=parseInt($('#vendorDropDown').val())
    newProduct.vendorname=$('#vendorDropDown option:selected').text()

  
    $.post(
       'http://localhost:1156/api/products/',newProduct,  
      (data) => {
        if (data.success) {
          refreshList()
          alert('added successfully...')
        } else {
          alert(data.message)
        }
      }
    )
  })

