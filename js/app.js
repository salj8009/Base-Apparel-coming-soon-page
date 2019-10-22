let logoTexto = document.getElementById("logoTexto");
let logoImagen =document.getElementById("logoImagen");

if (screen.width <= 375) {
	logoTexto.removeAttribute("class");
}else if (screen.width >= 376){
	logoImagen.removeAttribute("class");
}else{
	console.log("ok");
};

function formulario() {
	let email = document.getElementById("email").value;

	if (email === null || email.length == 0 || !(/\S+@\S+\.\S+/.test(email))) {
		//Salert("The email address is not formatted correctly");
		document.getElementById("imagenError").style.display = "block";
		document.getElementById("mensajeError").style.display = "block";
		document.getElementById("miFormulario").reset();
	}else{
		alert("correo enviado");
		document.getElementById("miFormulario").reset();
		document.getElementById("imagenError").style.display = "none";
		document.getElementById("mensajeError").style.display = "none";
	};

}