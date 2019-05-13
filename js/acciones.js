// JavaScript Document

$(document).ready(function (e){
	document.addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.version);
		$('#disp table td').eq(11).text(device.uuid);
	},false);//ready device
	
});//document

$(document).ready(function(e){
document.addEventListener("deviceready",function(){
		
$('#beep').tap(function(){
navigator.notification.beep(1);
});//tap beep

$('#vibrar').tap(function(){
navigator.notification.vibrate(1000);
});//tap vibrar

},false); //deviceready
}); //ready

$(document).ready(function(e){
document.addEventListener("deviceready",function(){
	
	$('#izquierda').on("swipeleft",function(){
		navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion","Aceptar"});
	});
	$('#derecha').on("swiperight",function(){
		navigator .notification. confirm ("¿que quieres hacer?",function(opt){
			switch(opt)
			{
				case 1:
				navigator.notification.beep(1);
				break;
				
				case 2:
				navigator.notification.vibrate(1000);
				break;
			}
		},"Aplicacion ","Beep,Vibrar,Cancelar");
	});
},false);
});
	