/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
Categoria ("desinfectante", "bactericida", "detergente" ) y el fabricante.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) La categoria con mas cantidad de unidades en total de la compra
c) Cuántas unidades de detergente con precios menos a 200 (inclusive) se compraron en total
d) el fabricante y Categoria del más caro de los productos*/
function mostrar()
{
	let nombreProducto;
	let tipo;
	let precio;
	let unidades;
	let categoria;
	let fabricante;
	let promedioALCOHOL;
	let promedioIAC;
	let promedioQUAT;
	let mayorTipo;
	let precioMasAlto;
	let mayorFabricante;
	let mayorCategoria;
	let acumALCOHOL = 0;
	let acumIAC = 0;
	let acumQUAT = 0;
	let acumuladorIACMenos200 = 0;
	let contadorALCOHOL = 0;
	let contadorIAC = 0;
	let contadorQUAT = 0;
	flag = 1;
	
	for(let i = 0; i < 5; i++){

		nombreProducto = prompt("Ingrese nombre del producto: ");

		tipo = prompt("Ingrese tipo de producto ALCOHOL/IAC/QUAT: ");
		while(tipo != "ALCOHOL" && tipo != "IAC" && tipo != "QUAT"){
		tipo = prompt("Error. Ingrese tipo de producto ALCOHOL/IAC/QUAT: ");
		}

		precio = parseInt(prompt("Ingrese precio entre 100 y 300: "));
		while(precio < 100 || precio > 300 || isNaN(precio)){
		precio = parseInt(prompt("Error. Ingrese precio entre 100 y 300: "));
		}

		unidades = parseInt(prompt("Ingrese cantidad de unidades mayor a 0 y menor a 1000: "));
		while(unidades <= 0 || unidades > 1000 || isNaN(unidades)){
		unidades = parseInt(prompt("Error. Ingrese cantidad de unidades mayor a 0 y menor a 1000: "));
		}
		categoria = prompt("Elija categoria desinfectante/bactericida/detergente");
		while(categoria != "desinfectante" && categoria != "bactericida" && categoria != "detergente"){
		categoria = prompt("Error. Elija categoria desinfectante/bactericida/detergente");
		}

		fabricante = prompt("Ingrese fabricante");

		switch(tipo){
			case "ALCOHOL":
				acumALCOHOL+= unidades;
				contadorALCOHOL++;
			break;
			case "IAC":
				acumIAC+= unidades;
				contadorIAC++;
				if(precio <= 200){
				acumuladorIACMenos200+= unidades;
				}
			break;
			case "QUAT":
				acumQUAT+= unidades;
				contadorQUAT++;
			break;
		}

		if(flag || (precioMasAlto < precio)){
			precioMasAlto = precio;
			mayorFabricante = fabricante;
			mayorCategoria = categoria;
			flag = 0;
		}
	}


	if(tipo == "ALCOHOL"){
		promedioALCOHOL = acumALCOHOL / contadorALCOHOL;
	} else if(tipo == "IAC"){
		promedioIAC = acumIAC / contadorIAC;
	} else{
		promedioQUAT = acumQUAT / contadorQUAT;
	}

	console.log("A- El promedio del ALCOHOL es " + promedioALCOHOL);
	console.log("A- El promedio del IAC es " + promedioIAC);
	console.log("A- El promedio del QUAT es " + promedioQUAT);

	if(acumALCOHOL > acumIAC && acumALCOHOL > acumQUAT){
		mayorTipo = "ALCOHOL";
	}else if(acumIAC >= acumALCOHOL && acumIAC > acumQUAT){
		mayorTipo = "IAC";
	}else{
		mayorTipo = "QUAT"
	}
	console.log("B- La categoria con mas cantidad de unidades en total de la compra es" + mayorTipo);

	if(acumuladorIACMenos200 = 0){
		console.log("C-No se compraron unidades de IAC por menos de 200");
	} else{
		console.log("C-Se compraron" + acumuladorIACMenos200 + " unidades de IAC por menos de 200");
	}

	console.log("D- el fabricante y Categoria del más caro de los productos" + fabricante + " " + categoria);

}
