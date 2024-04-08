/* ===( Creative 💌 : CODE AASHU )=== */
document.querySelector(".ser-1").addEventListener("mousemove", function(){
    document.querySelector(".h-div-1").style.top = "0%";
    document.querySelector(".ser-1").style.cursor = "pointer";
})

document.querySelector(".ser-1").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-1").style.top = "100%";
})


document.querySelector(".ser-2").addEventListener("mousemove", function(){
    document.querySelector(".h-div-2").style.top = "0%";
    document.querySelector(".ser-2").style.cursor = "pointer";
})

document.querySelector(".ser-2").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-2").style.top = "100%";
})

document.querySelector(".ser-3").addEventListener("mousemove", function(){
    document.querySelector(".h-div-3").style.top = "0%";
    document.querySelector(".ser-3").style.cursor = "pointer";
})

document.querySelector(".ser-3").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-3").style.top = "100%";
})

document.querySelector(".ser-4").addEventListener("mousemove", function(){
    document.querySelector(".h-div-4").style.top = "0%";
    document.querySelector(".ser-4").style.cursor = "pointer";
})

document.querySelector(".ser-4").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-4").style.top = "100%";
})


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"50% 50%",
    end:"100% 100%",
    scrub:true,
    // markers: true,
}});
tl
.to(".banner-1",{
    left: "-20%",
}, 'a')
.to(".banner-2",{
    right: "-15%",
}, 'a')