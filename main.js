var timer_counter = 0;
var score = 0;
var timer_check = "";
var answer = "";
var sketch_drawn = "";

var quick_draw = ["backpack","apple","car","fish","ball","snowflake","sock"];

random_num = Math.floor(Math.random() * quick_draw.length +1) ;

sketch = quick_draw[random_num];

document.getElementById("sketch_name").innerHTML = " Sketch to be drawn : " + sketch;

function preload(){
    
    
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
}


function draw(){
    strokeWeight(5);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
        
    }
}

var timeout = setTimeout(function(){yourFunction()},10000);

var interval = setInterval(function(){yourFunction()},1000);

function Timer(id, endtime) {
    const clock = document.getElementById(id);
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      clock.innerHTML = 'days: ' + t.days + '<br>' +
                        'hours: '+ t.hours + '<br>' +
                        'minutes: ' + t.minutes + '<br>' +
                        'seconds: ' + t.seconds;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    },1000);
  }