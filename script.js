var typed=new Typed(".auto-type",{
    strings:["WELCOME \nTO \nDIGITAL CLOCK APP"],
    typeSpeed:150,
    loop:true

});

function delayNavigation(event) {
  event.preventDefault();

  setTimeout(
    ()=>{
    window.location.href = event.target.href; // Navigates to the target URL
    }, 
  500);
}

document.querySelector("a").addEventListener('click',function(){
    document.querySelector(".text-container").classList.add("hide")
})

