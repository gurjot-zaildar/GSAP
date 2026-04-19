var initialPath = `M 30 80 Q 700 80 1300 80`;
var finalPath = `M 30 80 Q 700 80 1300 80`;

let string=document.querySelector("#string");

string.addEventListener("mousemove",function(dets){
    initialPath=`M 30 80 Q ${dets.x} ${dets.y} 1300 80`;
    gsap.to("svg path",{
        attr:{d: initialPath},
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.9,
        ease:"elastic.out(1,0,2)"
    })
})
     
    
