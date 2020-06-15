

//Directing Button Press


var numberOfDrumButtons= document.querySelectorAll(".drum").length;
for( var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick(){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    
}


//Directing Key Press



document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});




//Function that allows to make sound



function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio();
            tom1.src ='sounds/tom-1.mp3';
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio();
            tom2.src ='sounds/tom-2.mp3';
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio();
            tom3.src ='sounds/tom-3.mp3';
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio();
            tom4.src ='sounds/tom-4.mp3';
            tom4.play();
            break;

        case "j":
            var crash = new Audio();
            crash.src ='sounds/crash.mp3';
            crash.play();
            break;

        case "k":
            var kick = new Audio();
            kick.src ='sounds/kick-bass.mp3';
            kick.play();
            break;

        case "l":
            var snare = new Audio();
            snare.src ='sounds/snare.mp3';
            snare.play();
            break;
        
    
        default:
            console.log(buttonInnerHtml);
            alert("Wrong Key!");
            break;
    }

}





function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");


    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}




// const buttons = document.querySelectorAll('.drum');
// buttons.forEach(function(currentBtn){
//   currentBtn.addEventListener('click', handleClick)
// });