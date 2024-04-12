let Heading =document.getElementById("MainHeading");
let background =document.getElementById("bg");

let  backgroundremoved =document.getElementById("bgremoved");
window.addEventListener('scroll',()  => {

    let value=window.scrollY;

    Heading.style.marginTop=value * 2.5 + 'px';
    

})
