const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    if(!validateEmail(emailVal)) {
        form.classList.add('error');
        form.classList.remove('success')
    } else {
        form.classList.remove('error');
        form.classList.add('success');
    }
});

function validateEmail()
{
var x=document.f.email.value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}