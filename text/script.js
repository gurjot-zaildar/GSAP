function splitText(){
    var h1 =  document.querySelector("h1");
    var h1Text = h1.textContent;

    var splitText= h1Text.split("");
    var halfValue = h1Text.length/2

    var clutter = ""


    splitText.forEach(function(elem,idx){

         if(elem === " ") {
            elem = "&nbsp;";
         }

        if(idx<halfValue){
            clutter+=`<span class="a">${elem}</span>`
        }else{
            clutter+=`<span class="b">${elem}</span>`
        }
    })

    h1.innerHTML = clutter

    console.log(clutter)

}

splitText()

gsap.from("h1 .a",{
    y:70,
    opacity:0,
    duration:1,
    stagger:0.25
})

gsap.from("h1 .b",{
    y:70,
    opacity:0,
    duration:1,
    stagger:-0.25
})