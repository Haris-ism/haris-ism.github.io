const projectCard=document.querySelector("#projectCard")
const project=document.querySelector("#ProjectDetail")
const btn1=document.querySelector("#btnradio1")
const btn2=document.querySelector("#btnradio2")
const services=document.querySelector("#ServiceContainer")
const skills=document.querySelector("#SkillsContainer")
projectCard.addEventListener("click",()=>{
  videobackground.style.display = "inherit";
})
btn1.addEventListener("click",()=>{
  skills.style.display = "none";
  services.style.display = "flex";
})
btn2.addEventListener("click",()=>{
  skills.style.display = "flex";
  services.style.display = "none";
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
