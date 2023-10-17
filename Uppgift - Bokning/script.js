let formElem;
let cost = 0;

function init() 
{
    formElem = document.querySelector("form");
    console.log("init " +formElem.roomType.length );
    for(let i = 0;i<formElem.roomType.length;i++){
        formElem.roomType[i].addEventListener("click",event=>{
            checkIfFamilyRoom(); 
            costCalc();
            
        });
    }

    for(let i = 0;i<formElem.addition.length;i++){
        formElem.addition[i].addEventListener("click",event=>{
            costCalc();
        });
    }
}

function costCalc() {
    let roomType = Number(formElem.elements.roomType.value.split(",")[1]);
    let nights = Number(formElem.elements.nights.value);
    console.log(formElem.addition[2].disabled);
    for(i=0;i<formElem.addition.length;i++){
       
        if(formElem.addition[i].checked && !formElem.addition[i].disabled){
            roomType+=Number(formElem.addition[i].value.split(",")[1]);
        }
    }
    //let addition = Number(formElem.elements.addition.value.split(",")[1])
    console.log(roomType);
    console.log(nights)
    //console.log(addition);
   document.getElementById("totalCost").innerHTML = (roomType * nights);
   
}

window.onload = init;

function checkIfFamilyRoom(){
    if(formElem.roomType[2].checked === true){
        console.log("true");
        formElem.persons.disabled = false;
        formElem.persons.parentNode.style.color = "#000";
        formElem.addition[2].disabled = true;
        formElem.addition[2].parentNode.style.color = "#999";
    }else{
        console.log("false");
        formElem.persons.disabled = true;
        formElem.persons.parentNode.style.color = "#999";
        formElem.addition[2].disabled = false;
        formElem.addition[2].parentNode.style.color = "#000";
    }
}
