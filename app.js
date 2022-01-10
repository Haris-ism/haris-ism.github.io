$("#btnradio1").click(function(){
  $("#SkillsContainer").css("display","none");
  $("#ServiceContainer").css("display","flex")
})
$("#btnradio2").click(function(){
  $("#SkillsContainer").css("display","flex");
  $("#ServiceContainer").css("display","none")
})
$("#preview").click(function(){
  $("#videobackground").css("display","inherit")
})
$("#device1").click(function(){
  $("#videobackground").css("display","inherit")
})
$("#device2").click(function(){
  $("#videobackground").css("display","inherit")
})
$("#videobackground").click(function(){
  $("#videobackground").css("display","none")
})
$("#close").click(function(){
  $("#videobackground").css("display","none")
})

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// Bootstrap View Description
var popoverTriggerList = [].slice.call($('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// GSAP Nav Icon Scroll Animation
let navscroll = gsap.timeline({
  scrollTrigger:{
      trigger:'#navbars',
      start:"center top",
      end:"center -4000px",
      pin:"#navicon",
      toggleActions:"restart none none reverse",
  }
});
let hamburgericon = gsap.timeline({
  scrollTrigger:{
    trigger:'#mobilebtn',
    start:"top top",
    end:"bottom -500%",
    pin:"#hamburger",
  }
});

navscroll.to("#navP",{x:"0px",y:"600px",duration:0.1})
.to("#navQ",{x:"100px",y:"500px",duration:0.1})
.to("#navabout",{x:"200px",y:"400px",duration:0.1})
.to("#navhome",{x:'300px',y:"300px",duration:0.1})
