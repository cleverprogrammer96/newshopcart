    function refreshList() {
      $.get('http://localhost:1156/api/vendors/', (data) => {
        $('#vendorList').empty()
     if(data.success)
     {
        for (let vendor of data.data) {
            $('#vendorList').append(
              `<li>VendorName :  ${vendor.name}   <button onclick="deleteThisVendor(${vendor.id})">X</button></li>`
            )
          }
     }
     else
     {
       alert(data.message);
     }   
      })
    }
    refreshList()
    function deleteThisVendor(id)
    {
      let path='http://localhost:1156/api/vendors/'+id;
      $.ajax({
        url: path,
        type: 'DELETE',
        success: (data) => {
          if (data.success) {
            alert('deleted successfully')
            refreshList()
          } else {
            alert(data.message)
          }
        }
    });
      
    }
 
  
    $('#addVendorButton').click(() => {
      $.post(
        'http://localhost:1156/api/vendors/',
        {
          name: $('#vendorName').val()
        },
        (data) => {
          if (data.success) {
            alert('added successfully')
            refreshList()
          } else {
            alert(data.message)
          }
        }
      )
    })
  
