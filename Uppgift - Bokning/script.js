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

    formElem.city.addEventListener("blur", ()=>{
        capitalizeCity();
    })

    formElem.telephone.addEventListener("blur", ()=>{
        validate();
    })
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

function capitalizeCity() {
    let city = formElem.city.value;
    city = city.toUpperCase();
    console.log(city);
    formElem.city.value=city;
    console.log(formElem.city.value);
}

function validate() {
    let telephone = formElem.telephone.value;
    const regexPhone = /^0[0-9-/ ]{6,14}$/;
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/; 
    const regexZip = /[0-9]{5}$/;
    if (regexPhone.test(telephone)) {
        formElem.telephone.parentNode.style.color = "#008000";
    } else {
        formElem.telephone.style.color = "#FF0000"
    }

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

