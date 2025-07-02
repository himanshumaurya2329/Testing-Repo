let RBtn = document.querySelector('#register');
let form = document.querySelector('#register-form');

RBtn.addEventListener('click' , (e)=> {
  e.preventDefault();
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let gender = document.querySelector('#gender').value;
  let password = document.querySelector('#password').value;
  let cnfPass = document.querySelector('#re-password').value;

  if(password !== cnfPass)
  {
    alert("Password is not matching !!!!  Re-enter the password");
    return;
  }
  
  if(name == "" || email == "" || gender == "" || password == "" || cnfPass == "")
  {
    alert("Please enter the complete detail ");
    return;
  }

  let obj = {
    userName : name,
    userEmail : email,
    userGender : gender,
    userPassword : password
  };

  localStorage.setItem(email , JSON.stringify(obj));

  form.reset();
  
});
