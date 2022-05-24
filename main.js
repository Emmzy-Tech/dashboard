const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', function(){
  sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', function(){
  sideMenu.style.display = 'none';
})

function copyTxt() {
  /* Get the text field */
  var copyText = document.getElementById("ref-txt");
  var copied = document.querySelector('.copied');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  copied.style.display = "block";
  
  setTimeout(function(){copied.style.display = "none"},3000);
  
}
copied.innerHTML = "";