//*Image slideshow script//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//end of image slide show//

//Currency conversion table script// 
function euroConverter(){
document.converter.dollar.value = document.converter.euro.value * 1.470
document.converter.pound.value = document.converter.euro.value * 0.717
document.converter.peso.value = document.converter.euro.value * 56.40
}
function dollarConverter(){
document.converter.euro.value = document.converter.dollar.value * 0.680
document.converter.pound.value = document.converter.dollar.value * 0.488
document.converter.peso.value = document.converter.dollar.value * 50.80
}
function poundConverter(){
document.converter.dollar.value = document.converter.pound.value * 2.049
document.converter.euro.value = document.converter.pound.value * 1.394
document.converter.peso.value = document.converter.pound.value * 66.87

}
function pesoConverter(){
document.converter.dollar.value = document.converter.peso.value * 0.020
document.converter.pound.value = document.converter.peso.value * 0.015
document.converter.euro.value = document.converter.peso.value * 0.018
}
// end of conversion table script//

//amenities function for each hotel// 
function amenitiesAmanpulo(){ 
    var amenitiesAmanpulo= ["free high speed internet"+"<br>","free breakfast"+"<br>","fitness center"+"<br>","private island beach"+"<br>","diving"]
    var total="";
    var i=document.getElementById("amenitiesAmanpulo").value-1;
    while (i>=0){
   total+=amenitiesAmanpulo()[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
}

function amenitiesAngela(){ 
    var amenitiesAngela= ["free parking"+"<br>", "Free internet"+"<br>", "free breakfast"+"<br>", "antique furniture"+"<br>", "instant coffee"]
    var total="";
    var i=document.getElementById("amenitiesAngela").value-1;
    while (i>=0){
   total+=amenitiesAngela[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesManila(){ 
    var amenitiesManila= ["free parking"+"<br>", "pool"+"<br>", "free breakfast"+"<br>", "kids stay free"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitiesManila").value-1;
    while (i>=0){
   total+=amenitiesManila[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesKing(){ 
    var amenitiesKing= ["bar"+"<br>", "pool"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitiesKing").value-1;
    while (i>=0){
   total+=amenitiesKing[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesLind(){ 
    var amenitiesLind= ["bar"+"<br>", "pool"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitiesLind").value-1;
    while (i>=0){
   total+=amenitiesLind[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesDive(){ 
    var amenitiesDive= ["free parking"+"<br>", "pool"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitieDive").value-1;
    while (i>=0){
   total+=amenitiesDive[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesDaluyon(){ 
    var amenitiesDaluyon= ["airport transfer"+"<br>", "pool"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitiesDaluyon").value-1;
    while (i>=0){
   total+=amenitiesDaluyon[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesAmarela(){ 
    var amenitiesAmarela= ["spa"+"<br>", "beach front hotel"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitieAmarela").value-1;
    while (i>=0){
   total+=amenitiesAmarela[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesHive(){ 
    var amenitiesHive= ["spa"+"<br>", "beach front hotel"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitieHive").value-1;
    while (i>=0){
   total+=amenitiesHive[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
function amenitiesFox(){ 
    var amenitiesFox= ["spa"+"<br>", "airport transportation"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitieFox").value-1;
    while (i>=0){
   total+=amenitiesFox[i]
    i--;
document.getElementById("demo1").innerHTML=total;  
    }

function amenitiesHostel(){ 
    var amenitiesHostel= ["spa"+"<br>", "beach front hotel"+"<br>", "free breakfast"+"<br>", "water sports"+"<br>", "Evening entertainmnet"]
    var total="";
    var i=document.getElementById("amenitieHostel").value-1;
    while (i>=0){
   total+=amenitiesHostel[i]
    i--;
document.getElementById("demo1").innerHTML=total; 
    }
    
function amenitiesRed(){ 
    var total="";
    var i=document.getElementById("amenitieRed").value-1;
    while (i>=0){
   total+=amenitiesRede[i]
    i--;
document.getElementById("demo1").innerHTML=total;    
    }
    
//End of Amenities javascript code//
    
//validator function for currency//
function validator(){
var x=parseFloat(document.getElementById("peso").value);
var y=parseFloat(document.getElementById("euro").value);
    if (isNaN(x)){
        alert("please fill in amount");
    }
    if (isNaN(y)){
        alert("Please fill in amount");
    }   
} 
// End of validator function 

function myFunction() {
  alert("Welcome to the Beaches Page! Enjoy!");
}