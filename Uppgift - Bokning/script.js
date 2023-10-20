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
        validateTelephone();
    })

    formElem.zipcode.addEventListener("blur", ()=>{
        validateZip();
    })

    formElem.campaigncode.addEventListener("blur", ()=>{
        validateCampaign();
    })

    formElem.campaigncode.addEventListener("keyup", ()=>{
        validateStartCampaign();
    })

    formElem.campaigncode.addEventListener("focus", ()=>{
        validateFocusCampaign();
    })
}

function costCalc() {
    let roomType = Number(formElem.elements.roomType.value.split(",")[1]);
    let nights = Number(formElem.elements.nights.value);
    for(i=0;i<formElem.addition.length;i++){
       
        if(formElem.addition[i].checked && !formElem.addition[i].disabled){
            roomType+=Number(formElem.addition[i].value.split(",")[1]);
        }
    }
    //let addition = Number(formElem.elements.addition.value.split(",")[1])
    //console.log(addition);
   document.getElementById("totalCost").innerHTML = (roomType * nights);
   
}

function capitalizeCity() {
    let city = formElem.city.value;
    city = city.toUpperCase();
    formElem.city.value=city;
}

function validateTelephone() {
    let telephone = formElem.telephone.value;
    let errorMsg = formElem.telephone.parentNode.parentNode.getElementsByTagName("span")[1];
    const regexPhone = /^0[0-9-/ ]{6,14}$/;
    
    if (regexPhone.test(telephone)) {
        errorMsg.innerHTML="";
        formElem.telephone.style.color = "#008000";
    } else {
        formElem.telephone.style.color = "#FF0000";
        errorMsg = formElem.telephone.parentNode.parentNode.getElementsByTagName("span")[1];
        errorMsg.innerHTML = "Telefonnumret måste börja med 0 och innehålla 6 - 14 siffror";
    }
}

function validateZip() {
    let zipcode = formElem.zipcode.value;
    let errorMsg = formElem.zipcode.parentNode.parentNode.getElementsByTagName("span")[1];
    const regexZip = /[0-9]{5}$/; 

    if (regexZip.test(zipcode)) {
        errorMsg.innerHTML="";
        formElem.zipcode.style= "#008000"; 
    } else {
        formElem.zipcode.style.color = "#FF0000"; 
        errorMsg = formElem.zipcode.parentNode.parentNode.getElementsByTagName("span")[1];
        errorMsg.innerHTML = "Postnummret måste innehålla fem siffror";
    }
}

function validateCampaign() {
    let campaign = formElem.campaigncode.value; 
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/;
    
    if (regexCampaign.test(campaign)) {
        formElem.campaigncode.style.backgroundColor = "#008000";
    } else {
        formElem.campaigncode.style.backgroundColor = "#FF0000"; 
    }
}

function validateStartCampaign() {
    let campaign = formElem.campaigncode.value; 
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/;
    
    if (regexCampaign.test(campaign)) {
        formElem.campaigncode.style.backgroundColor = "#008000";
    } else {
        formElem.campaigncode.style.backgroundColor = "#FF0000"; 
    }
}

function validateFocusCampaign() {
    let campaign = formElem.campaigncode.value;
    const regexCampaign = /[A-Za-z]{3}-[0-9]{2}-[A-Za-z]{1}[0-9]{1}$/;

    if (regexCampaign.test(campaign)) {
        formElem.campaigncode.style.backgroundColor = "#008000";
    } else {
        formElem.campaigncode.style.backgroundColor = "#FF0000"; 
    }
}

window.onload = init;

function checkIfFamilyRoom(){
    if(formElem.roomType[2].checked === true){
        formElem.persons.disabled = false;
        formElem.persons.parentNode.style.color = "#000";
        formElem.addition[2].disabled = true;
        formElem.addition[2].parentNode.style.color = "#999";
    }else{
        formElem.persons.disabled = true;
        formElem.persons.parentNode.style.color = "#999";
        formElem.addition[2].disabled = false;
        formElem.addition[2].parentNode.style.color = "#000";
    }
}

