function animation(){
    var tl = gsap.timeline();

tl.from("#nav #logo",{
    y:-30,
    duration:1,
    opacity:0,
})
tl.from("#nav nav h4 ,#nav button",{
    y:-30,
    duration:0.8,
    opacity:0,
    stagger:0.15
},"-=1")

tl.from("#hero #image img",{
    x:50,
    duration:1,
    opacity:0
})

tl.from("#hero #content h1, #hero p,#hero button",{
    x:-50,
    duration:1,
    opacity:0,
    stagger:0.4
},"-=1")


var tl2= gsap.timeline({
    scrollTrigger:{
           trigger:"#div2",
        scroller:"body",
        start:"top 50%",
        end:"top -50%",
        scrub:2
    }
})

gsap.from("#div2 #brand img",{
      y: 50,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#div2",
        scroller:"body",
        start:"top 50%",
    }
})

tl2.from("#div2 #services",{
      x: -60,
    duration:1,
    opacity:0,
})
tl2.from("#div2 #boxes .boxw.left",{
      x: -60,
    duration:1,
    opacity:0,
},"anum1")
tl2.from("#div2 #boxes .box.right",{
      x: 60,
    duration:1,
    opacity:0,
},"anum1")
tl2.from("#div2 #boxes .box.left",{
      x: -60,
    duration:1,
    opacity:0,
},"anum2")
tl2.from("#div2 #boxes .boxw.right",{
      x: 60,
    duration:1,
    opacity:0,
},"anum2")

var tl3= gsap.timeline({
    scrollTrigger:{
           trigger:"#last",
        scroller:"body",
        start:"top 50%",
        end:"top -20%",
        scrub:2
    }
})

tl3.from("#last #perposal",{
 y: -60,
    duration:3,
    opacity:0,
},"anum3")

tl3.from("#last #perposal #perposal-text",{
 x: -60,
    duration:1,
    opacity:0,
},"anum3")
tl3.from("#last #perposal #img-perposal",{
 x: 60,
    duration:1,
    opacity:0,
},"anum3")


tl3.from("#last #case-study",{
    x: -60,
    duration:3,
    opacity:0,
})

tl3.from("#last #end-box",{
    y: -60,
    duration:3,
    opacity:0,
})

tl3.from("#last #end-box .box-end",{
    x: -60,
    duration:1,
    opacity:0,
    stagger:1
})
}

animation()
