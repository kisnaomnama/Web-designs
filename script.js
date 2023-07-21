console.log("page loading...");

var cookieDiv = document.querySelector(".cookie-policy");

function _cartMessage() {
    console.log("Your Cart is empty");
        alert("Your Cart is empty");
}

function _accept() {
        cookieDiv.remove();
    }

function newImage(){
document.getElementById("image").src="assets/aeonium-s.jpg";
}

function oldImage(){
    document.getElementById("image").src="assets/succulents-2.jpg";
}

function loading(){
alert("Next Page loading");
}



