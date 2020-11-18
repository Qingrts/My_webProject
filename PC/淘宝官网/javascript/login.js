$(".login_fit").on("click", function (){
	$(".password_login").removeClass("hidden");
	$(".phone_login").addClass("hidden");
})
$(".login_snd").on("click", function (){
	$(".phone_login").removeClass("hidden");
	$(".password_login").addClass("hidden");
})