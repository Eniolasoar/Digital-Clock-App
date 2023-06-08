var typed=new Typed(".auto-type",{
    strings:["WELCOME \nTO \nDIGITAL CLOCK APP"],
    typeSpeed:150,
    loop:true

});

function delayNavigation(event) {
  event.preventDefault(); // Prevents the default navigation behavior

  setTimeout(function() {
    window.location.href = event.target.href; // Navigates to the target URL
  }, 500);
}

document.querySelector("a").addEventListener('click',function(){
    textDisplay=document.querySelector(".text-container").classList.add("hide")
})

