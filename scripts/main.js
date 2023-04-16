const img = document.querySelector("img");
const basepath = ["docs/assets/Kanye/baseExpressions/","docs/assets/GAGA/baseExpressions/","docs/assets/Taylor/baseExpressions/","docs/assets/Beyonce/baseExpressions/" ];
const weights = ["skinny person/","more underwieght person/","underwieght person/","neutral weight person/","overwieght person/","more overwieght person/","fat person/"];
const haircol = ["blonde/","brown/","ginger/","grey/","red/","white/"];
const expressions = ["angry expression/","sad expression/","neutral expression/","happy expression/","disgust expression/","scared expression/","shocked expression/"];
const eyes = ["closed eyes.jpg","normal eyes.jpg","wide eyes.jpg"];


person = 0

let hungry = 3;
let color = 1;
let express  = 2;  
let eyelid = 1;
let overload = 0;
let sleeping = false;
let sleepiness = 0;
let started = false;
var eatA = new Audio("docs/assets/Audio/eat.wav");
var colA = new Audio("docs/assets/Audio/newhair.wav");
var sleepA = new Audio("docs/assets/Audio/sleep.wav");





Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
    }


function choosecar(numb){
    person = numb;
    if (person === 1){
        color = 0;

    }
    change();
    show()
    


}




function gotobed()
{
    if (sleeping !== true)
    {
        sleepA.play()
        sleeping = true;
        sleepiness = 0;
        change()


    }



}

function change(){
    
    if(sleeping === true){
        img.setAttribute("src", createpath(hungry,color,2,0));
        window.setTimeout(() => sleeping = false, 4500);
        window.setTimeout(() => img.setAttribute("src", createpath(hungry,color,express,1)), 4500);
        
        
        
    }
    else if (sleepiness >5){
        img.setAttribute("src", createpath(hungry,color,5,2));

    }
    else{
        img.setAttribute("src", createpath(hungry,color,express,eyelid));

    }
    

    



}

function createpath(hunger, col, emotion, wink){
    return basepath[person]+weights[hunger]+haircol[col]+expressions[emotion]+eyes[wink];



}

function show(){
    if (started === false){
        
        let ele = document.getElementsByClassName('dip');
        for (const box of ele) {
            
            box.style.display = 'none';
        }
        
        let ele2 = document.getElementsByClassName("lip");
        for (const box of ele2) {
            
            box.style.display = 'block';
        }
        
    }
    else{
        
        let ele = document.getElementsByClassName('dip');
        for (const box of ele) {
            
            box.style.display = 'block';
        }
        
        let ele2 = document.getElementsByClassName("lip");
        for (const box of ele2) {
            
            box.style.display = 'none';
        }


    }
    started = !started;
}

/*reset fuction */

function reset(){
    if (express >3){
        express =2;


    }


}


function dyehair(num){
    if(sleeping === false){
        colA.play()
        color = num;
        express = 6;
        change()
    }
}





function feed(){
    if (sleeping === false){
        eatA.play()



        reset();


        if (hungry !==6){
            hungry +=1;
            if (express !==3){
                express +=1;
            }
        }
        else{
                express = 4;


        }
        overload = 0;
        change();
    }

}

function hunger(){
    reset();
    if (hungry !==0){
        hungry -=1;
    }
    else{

        overload +=1

    }
    if (express > 1){
        express -=1;
    }
    else if (overload > 2){
        express =0;
        

    }
    change();


}




function blinkclose(){
    
    eyelid = 0;
        
    change();
    window.setTimeout(blinkopen, 450);
    
}

function blinkopen(){
    
    eyelid = 1;
        
    change();
    
}


function sleepy(){
    if (sleeping ===false){ 
        sleepiness += 1;

    }
}



window.setInterval(hunger,8500);
window.setInterval(blinkclose, 10000);

window.setInterval(sleepy, 14000);