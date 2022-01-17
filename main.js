//mantendo a viewport padrao
const viewH = window.innerHeight;
document.documentElement.style.setProperty('--vh', `${viewH}px`);



//=
const menuToggle = document.querySelector(".menuToogle");
const navBar = document.querySelector(".navBar");

menuToggle.addEventListener("click", ()=>{
  
  
  
 navBar.classList.toggle('active');
 menuToggle.classList.toggle('active');
 
  
})

//
const passwordShow = document.querySelector(".statePassword");
const passwordInput = document.querySelector("#passwordInput");

passwordShow.addEventListener('click',
()=>{
  
  passwordShow.classList.toggle("active");
  
  
  if(passwordInput.type == "password")
  {
    passwordInput.type = "text";
  }
  else
  {
    passwordInput.type = "password";
  }
});