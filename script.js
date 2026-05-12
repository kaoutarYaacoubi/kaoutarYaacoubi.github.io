$(document).ready(function(){
$(".progress-bar").each(function(){
$(this).animate({
width:$(this).attr("data-width")
},1500);
});
$(".accordion-header").click(function(){
$(".accordion-content").slideToggle();
});
$("#form").submit(function(e){
e.preventDefault();
let name=$("#name").val();
let email=$("#email").val();
let message=$("#message").val();
if(name==="" || email==="" || message===""){
alert("Veuillez remplir tous les champs");
return;

}
if(!email.includes("@")){
alert("Email invalide");
return;
}
alert("Message envoyé avec succès !");
});
});


$(".star-fill").each(function(){

  $(this).animate({
    width:$(this).attr("data-width")
  },1500);

});