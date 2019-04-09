$('#login').click(()=>{
    let loginuser={};
    loginuser.email=$('#emailId').val();
    loginuser.password=$('#password').val();

   $.post('http://localhost:1156/api/users/login',user,
   (data)=>{
      console.log(data);
   }
   )
})