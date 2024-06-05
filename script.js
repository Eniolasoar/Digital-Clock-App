var typed=new Typed(".auto-type",{
    strings:["WELCOME \nTO \n YOUR \n PERSONAL \n DIGITAL CLOCK APP"],
    typeSpeed:70,
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

