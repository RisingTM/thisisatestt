var day=document.getElementById("days")
var hour=document.getElementById("Hour")
var min=document.getElementById("Min")
var sec=document.getElementById("sec")

var datecount=new Date('April 23 ,2023 ').getTime()

var x=setInterval(function(){
    var now=new Date().getTime()
    var dis=datecount-now
    var dayz = Math.floor(dis / (1000 * 60 * 60 * 24));
    var hourz = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutez = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    var secondz = Math.floor((dis % (1000 * 60)) / 1000);
    
    day.innerHTML=dayz + 'D'
    hour.innerHTML=hourz + 'H'
    min.innerHTML=minutez + 'M'
    sec.innerHTML=secondz + 'S'
})

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })