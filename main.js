var timer_counter = 0;
var score = 0;
var timer_check = "";
var answer = "";
var sketch_drawn = "";


var quick_draw = ["backpack","apple","car","fish","ball","snowflake","sock"];

random_num = Math.floor(Math.random() * quick_draw.length ) ;

sketch = quick_draw[random_num];

document.getElementById("sketch_name").innerHTML = " Sketch to be drawn : " + sketch;



function update_canvas(){

    background("white");

random_num = Math.floor(Math.random() * quick_draw.length ) ;

sketch = quick_draw[random_num];

document.getElementById("sketch_name").innerHTML = " Sketch to be drawn : " + sketch;


}

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

   check_sketch();
    
}

//var timeout = setTimeout(function(){yourFunction()},10000);

//var interval = setInterval(function(){yourFunction()},1000);


function check_sketch(){
    timer_counter = timer_counter +1;

    document.getElementById("Timer").innerHTML = "Timer : " + timer_counter;

    if (timer_counter>500){

      timer_counter = 0;
      timer_check = "finished";
    }
    if(timer_check == "finished" || answer == "set" )
    {
        timer_check = "";
        answer = "";
        update_canvas();
    }

  
}


