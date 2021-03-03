/*Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de mas de 60 años.
b) el nombre y temperatura de la mujer con PAMI mas joven
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */



function mostrar()
{
	let nombre;
	let obraSocial;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let edadmujerJoven;
	let nombreMJ;
	let temperaturaCorporalMJ;
	let precioBruto;
	let precioConDescuento;
	let precio = 600;
	let contadorV = 0;
	let contadorPAMI = 0;
	let contadorPasajeros = 0;
	let flagMJ = 1;



	do{

		nombre = prompt("Ingrese nombre: ");
	
		obraSocial = prompt("Ingrese obra social PAMI/OSDE/otras");
		while(obraSocial != "PAMI" && obraSocial != "OSDE" && obraSocial != "otras"){
		obraSocial = prompt("Error. Ingrese obra social PAMI/OSDE/otras");
		}

		edad = parseInt(prompt("Ingrese edad mayor a 17: "));
		while(edad < 17 || isNaN(edad)){
		edad = parseInt(prompt("Error. Ingrese edad mayor a 17: "));
		}

		sexo = prompt("Ingrese sexo f/m: ").toLowerCase();
		while(sexo != "f" && sexo != "m"){
		sexo = prompt("Error. Ingrese sexo f/m: ").toLowerCase();
		}
	
		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal:"));
		while(temperaturaCorporal < 0 || isNaN(nota)){
		temperaturaCorporal = parseInt(prompt("Error. Ingrese temperatura corporal: "));
		}	
	
		if(edad < 60 && obraSocial == "OSDE"){
			contadorV++;
		}

		if(flagMJ || (sexo = "f" && obraSocial == "PAMI" && edadmujerJoven > edad)){
			nombreMJ = nombre;
			temperaturaCorporalMJ = temperaturaCorporal;
			edadmujerJoven = edad;
			flagMJ = 0;
		}

		if(obraSocial == "PAMI"){
			contadorPAMI++;
		}

		contadorPasajeros++;

		respuesta = prompt("Desea ingresar otro pasajero?: ");
	}while(respuesta == "si");

	if(contadorV == 0){
		console.log("A- No se ingresaron pasajeros de mas de 60 años con OSDE");
	} else{
		console.log("A- La cantidad de personas con OSDE de mas de 60 años es" + contadorV);
	}

	if(flagMJ = 1){
		console.log("B- No se ingresaron mujeres con obra social PAMI");
	} else{
		console.log("B- El nombre y temperatura de la mujer con PAMI mas joven es " + nombreMJ + " con " + temperaturaCorporalMJ + "°C");
	}
	
	precioBruto = precio * contadorPasajeros;

	console.log("C- El viaje total sin descuento cuesta " + precioBruto);
	
	if(contadorPAMI > contadorPasajeros / 2){
		precio = precioBruto * 0.25;
		precioConDescuento = precioBruto - precio;
		console.log("D- El precio final es " + precioConDescuento);
	}


}
