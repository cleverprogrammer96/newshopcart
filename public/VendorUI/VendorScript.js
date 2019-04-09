    function refreshList() {
      $.get('http://localhost:1156/api/vendors/', (data) => {
        $('#vendorList').empty()
     if(data.success)
     {
        for (let vendor of data.data) {
            $('#vendorList').append(
              `<li> ${vendor.name}   <button onclick="deleteThisVendor(${vendor.id})">X</button></li>`
            )
          }
     }     
      })
    }
    function deleteThisVendor(id)
    {
      let path='http://localhost:1156/api/vendors/'+id;
      $.ajax({
        url: path,
        type: 'DELETE',
        success: (data) => {
          if (data.success) {
            refreshList()
          } else {
            alert('Some error occurred')
          }
        }
    });
      
    }
    refreshList()
  
    $('#addVendorButton').click(() => {
      $.post(
        'http://localhost:1156/api/vendors/',
        {
          name: $('#vendorName').val()
        },
        (data) => {
          if (data.success) {
            refreshList()
          } else {
            alert('Some error occurred')
          }
        }
      )
    })
  
