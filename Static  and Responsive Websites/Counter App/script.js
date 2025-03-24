const counterValue = document.getElementById("counterValue");
let count = 0

function onDecrement(){
    count = count-1;
    counterValue.textContent=count;
    if(count<0){
        counterValue.style.color="Red"
    }
    else if(count>0){
        counterValue.style.color="Green"
    }
    else{
        counterValue.style.color="black"
    }
}

function onReset(){
    count = 0;
    counterValue.textContent=count;
    counterValue.style.color="black"
}

function onIncrement(){
    count = count+1;
    counterValue.textContent=count;
    if(count<0){
        counterValue.style.color="Red"
    }
    else if(count>0){
        counterValue.style.color="Green"
    }
    else{
        counterValue.style.color="black"
    }

}