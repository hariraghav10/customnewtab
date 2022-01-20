
   // background-image: url("bg1.jpg");

   var urr="https://www.google.com/search?q=";
   var q;

  function gooto(){
    q=document.getElementById("inpp").value;
    document.getElementById("inpp").value="";
    quri=encodeURIComponent(q);
    window.location.href=urr+quri;
  }
   
  var butn=document.getElementById("butn");
   butn.addEventListener("click",function(){ 
     if( document.getElementById("inpp").value!==""){
    gooto();
}})

  document.addEventListener("keyup", e => {
   if(e.key==="Enter"){
       if( document.getElementById("inpp").value!==""){
           gooto();
       }
   }
  });