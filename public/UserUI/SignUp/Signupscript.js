$('#signUpButton').click(()=>{
    let user={};
    user.firstname=$('#firstName').val();
    user.lastname=$('#lastName').val();
    user.email=$('#emailId').val();
    user.password=$('#password').val();
    console.log(user);

   $.post('http://localhost:1156/api/users/',user,
   (data)=>{
      console.log(data);
   }
   )
})