$('#login').click(()=>{
    let loginuser={};
    loginuser.email=$('#emailId').val();
    loginuser.password=$('#password').val();
      console.log(loginuser)
   $.post('http://localhost:1156/api/users/login/',loginuser,
   (data)=>{
   if(data.success){
      alert('you are logged in');
      
   }
   else
   {
      alert(data.message)
   }
   }
   )
})