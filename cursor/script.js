let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let img =document.querySelector("#image")

main.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out(1.7)",
        duration: 1,
    })
})

img.addEventListener("mouseenter",()=>{
    cursor.innerHTML="img"
    gsap.to(cursor,{
        scale:1.5,
        backgroundColor: "gray"
    })
})

img.addEventListener("mouseleave",()=>{
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
          backgroundColor: "aqua"
    })
})