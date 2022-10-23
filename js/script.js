// VARIABLES
let generateButton = document.getElementById("generate-button");
let cancelButton = document.getElementById("cancel-button");
console.log(generateButton)
generateButton.addEventListener( "click" ,
    function(){
        let userName = document.getElementById("userName").value;
        let userKm = document.getElementById("userKm").value;
        let userAge = document.getElementById("userAge").value;
       
        // EXECUTING ACTIONS
        let userPrice = userKm * 0.21;
        if(userAge === "Over"){
            userPrice = userPrice - (userPrice * 0.4);
        } else if(userAge === "Minorenne"){
            userPrice = userPrice - (userPrice * 0.2);
        }
        userPrice = userPrice.toFixed(2)
        document.getElementById("op-userName").innerHTML = ` ${userName}`;
        document.getElementById("op-userKm").innerHTML = `${userKm}`;
        document.getElementById("op-userAge").innerHTML = `${userAge}`;
        document.getElementById("op-userPrice").innerHTML = ` ${userPrice}`;
        }
    
    
);
cancelButton.addEventListener( "click" , function(){
document.getElementById("op-userName").innerHTML = ` `;
document.getElementById("op-userKm").innerHTML = ``;
document.getElementById("op-userAge").innerHTML = ``;
document.getElementById("op-userPrice").innerHTML = '';
}
);