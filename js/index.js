

/*
  // Full Website Loading
const loader = document.querySelector('#website-loading');
const fullPage = document.querySelector('#smooth-scroll-wrapper');
*/
/*window.addEventListener('load', function () {
  loader.style.animation = 'opacityDisplayNone 0.5s ease forwards 1';
  fullPage.style.visibility = 'visible';
  body.style.overflowY = "unset"
});*/

/*
// Smooth Scrolling
$(".nav-link-home").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 0,
      },
      1000
    );
  }
});

$(".nav-link-projects-section").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 0,
      },
      1000
    );
  }
});

$(".nav-link-about").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 0,
      },
      4500
    );
  }
});


// Smallar Touch Devices Media Queries
if (window.matchMedia("(max-width: 1100px)").matches) {
  mouseCursor.remove();
}
*/


const bannerTl=gsap.timeline();

bannerTl
.from('.logo',5,{opacity:0,y:"900%",opacity:0,ease:Power3.easeOut},"=0.9")
.from('.line1',3,{x:"1000%",ease:Power3.easeOut},"=-5")
.from('.line2',3,{x:"1000%",ease:Power3.easeOut},"=-4.8")
.from('.line3',3,{x:"1000%",ease:Power3.easeOut},"=-4.5")
.from('.line4',3,{x:"1000%",ease:Power3.easeOut},"=-4.1");

const sectt2 = gsap.timeline();


sectt2

.from('#contmain h1',1,{opacity:0,x:40,ease:Power3.easeOut})

.from('.h2',0.5,{opacity:0,y:40},"=-0.8");

const controller = new ScrollMagic.Controller();
const scene1 = new ScrollMagic.Scene({
  triggerElement:"#line3Indi",
  triggerHook:0,
  reverse:true
  
})
  /*.addIndicators()*/
  .setTween(sectt2)
  .addTo(controller);

const sect3 = gsap.timeline();
sect3
.from(".h2con",2,{opacity:0,y:400,ease:Power3.easeOut});



//scene2

const controller1 = new ScrollMagic.Controller();
const scene2 = new ScrollMagic.Scene({
  triggerElement:".span",
  triggerHook:0,
  reverse:true
})
/*
.addIndicators()*/
.setTween(sect3)
.addTo(controller1);



const sec4 = gsap.timeline();

sec4
.from(".projectname",5,{opacity:0,x:40,ease:Power3.easeOut},"=-2.99")
.from(".project1img",1.5,{opacity:0,y:"80%",ease:Power3.easeOut},"=-4")
.from(".project2img",1.5,{opacity:0,y:"100%",ease:Power3.easeOut},"-=4");


const controller2 = new ScrollMagic.Controller();
const scene3 = new ScrollMagic.Scene({
  triggerElement:".h2con",
  triggerHook:0,
  reverse:true
})
/*
.addIndicators()*/
.setTween(sec4)
.addTo(controller2);


const sec55 = gsap.timeline();

sec55

.from(".project3img",2,{opacity:0,y:"80%",ease:Power3.easeOut},"=-10")
.from(".project4img",3,{opacity:0,y:"100%",ease:Power3.easeOut},"=-10")

const controller3 = new ScrollMagic.Controller();
const scene4 = new ScrollMagic.Scene({
  triggerElement:".circlepro3",
  triggerHook:0,
  reverse:true
})
/*
.addIndicators()*/
.setTween(sec55)
.addTo(controller3);


/*-----------------------------------------------blotter animation for logo--------------------------*/
var text = new Blotter.Text("venkatesh", {
  family: 'Poppins',
  size: 60,
  fill: "white",
  paddingLeft: 0,
  paddingRight: 80,
  paddingTop: 130,
  paddingBottom: 80,
})

var material = new Blotter.LiquidDistortMaterial();
material.uniforms.uVolatility.value=0.03;
material.uniforms.uSpeed.value = 1; // 0 false, 1 true
material.uniforms.uSeed.value = 13; // 0 false, 1 true


var blotter = new Blotter(material, {
  texts: text
})

var scope = blotter.forText(text);

scope.appendTo(document.querySelector(".logo"));

document.onmousemove = moveIt;
function moveIt(event) {
  material.uniforms.uSeed.value = (event.clientX * .0010);

}