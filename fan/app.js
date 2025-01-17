let start = document.querySelector(".start");
let blade = document.querySelector(".fan");
let speed = document.querySelectorAll(".speed");

let spin = false;

start.addEventListener("click", function(){
    if(spin==false){
        start.textContent = "Off";
        blade.style.animationDuration = "1s";
        spin =true;
    }else{
        start.textContent = "On";
        blade.style.animationDuration = "0s";
        spin = false;
    }
    console.log(blade);
    
})
speed.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if(spin == true){
           let btn = e.currentTarget.classList;
        // console.log(style);
            if(btn.contains("one"))
            {
                blade.style.animationDuration = "0.8s";
            }else if(btn.contains("two")){
                blade.style.animationDuration = "0.5s";
            }else{
                blade.style.animationDuration = "0.2s";
            }
         
        }

        
    })
})

