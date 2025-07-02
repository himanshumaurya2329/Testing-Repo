let LBtn = document.querySelector('#login');
let form = document.querySelector('#login-form');

LBtn.addEventListener('click' , (e)=> {
  e.preventDefault();

  let email = document.querySelector('#login-email').value;
  let password = document.querySelector('#login-password').value;

  let obj = localStorage.getItem(email);
  if(obj === null)
  {
    alert("Email is not registered");
  }
  else
  {
    obj = JSON.parse(obj);
    if(obj.userPassword === password)
    {
      alert("You are Logged in");
    }
    else
    {
      alert("Incorrect Password");
    }
  }

  form.reset();
})