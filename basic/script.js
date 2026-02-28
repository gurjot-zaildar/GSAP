

gsap.to("#frame-2 h1",{
    transform:"translate(-210%)",
    scrollTrigger:{
        trigger:"#frame-2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})