/*Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
situcación laboral ("buscando" , "trabajando" o "solo estudiante")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no de los que tarbajan o estan buscando
b) El nombre del mas viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situacion laboral
d) La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo*/

function mostrar()
{
  let nombre;
  let situacionLaboral;
  let materias;
  let sexo;
  let nota;
  let edad;
  let nombreMP;
  let nombreMV;
  let nombreMM;
  let notaMP;
  let edadMV;
  let edadMM;
  let materiasMM;
  let respuesta;
  let promedioBuscando;
  let promedioSoloEstudiante;
  let promedioTrabajando;
  let acumBuscando = 0;
  let acumSoloEstudiante = 0;
  let acumTrabajando = 0;
  let contadorBuscando = 0;
  let contadorSoloEstudiante = 0;
  let contadorTrabajando = 0;
  let flagMP = 1;
  let flagMV = 1;
  let flagMM = 1;



  do{
    nombre = prompt("Ingrese nombre: ");
    
    situacionLaboral = prompt("Ingrese situacion laboral buscando/trabajando/solo estudiante");
    while(situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante"){
    situacionLaboral = prompt(" Error. Ingrese situacion laboral buscando/trabajando/solo estudiante");
    }

    materias = parseInt(prompt("Ingrese cantidad de materias mayor a 0 y menor a 8: "));
    while(materias <= 0 || materias > 8 || isNaN(materias)){
    materias = parseInt(prompt("Error. Ingrese cantidad de materias mayor a 0 y menor a 8: "));
    }

    sexo = prompt("Ingrese sexo f/m/no binario").toLowerCase();
    while(sexo != "f" && sexo != "m" && sexo != "no binario: "){
    sexo = prompt("Error. Ingrese sexo f/m/no binario: ").toLowerCase();
    }

    nota = parseInt(prompt("Ingrese promedio de nota entre 0 y 10:"));
    while(nota < 0 || nota > 10 || isNaN(nota)){
    nota = parseInt(prompt("Error. Ingrese promedio de nota entre 0 y 10: "));
    }

    edad = parseInt(prompt("Ingrese edad: "));
    while(edad < 0 || isNaN(edad)){
    edad = parseInt(prompt("Error. Ingrese edad: "));
    }

    if(flagMP || (situacionLaboral != "trabajando" && notaMP < nota)){
      nombreMP = nombre
      notaMP = nota
      flagMP = 0;
    }

    if(flagMV || (situacionLaboral == "solo estudiante" && edadMV < edad)){
      nombreMV = nombre;
      edadMV = edad;
      flagMV = 0;
    }

    if(flagMM || (situacionLaboral == "buscando" && materiasMM > materias)){
      nombreMM = nombre;
      edadMM = edad;
      materiasMM = materias;
      flagMM = 0;
    }

		switch(situacionLaboral){
			case "buscando":
				acumBuscando+= nota;
				contadorBuscando++;
			break;
			case "solo estudiante":
				acumSoloEstudiante+= nota;
				contadorSoloEstudiante++;
			break;
			case "trabajando":
				acumTrabajando+= nota;
				contadorTrabajando++;
			break;
		}
    

    respuesta = prompt("Desea ingresar otro alumno?: ");
  } while(respuesta == "si");

  console.log("a) El nombre del mejor promedio de los que trabajan o estan buscando es " + nombreMP);
  
  console.log("b) El nombre del mas viejo de los alumnos que solo sea estudiante es " + nombreMV);

  if(situacionLaboral == "buscando"){
   promedioBuscando = acumBuscando / contadorBuscando;
  } else if(situacionLaboral == "solo estudiante"){
    promedioSoloEstudiante = acumSoloEstudiante / contadorSoloEstudiante;
  } else{
    promedioTrabajando = acumTrabajando / contadorTrabajando;
  }
  console.log("C- El promedio del nota con situacion laboral buscando es " + promedioBuscando);
	console.log("C- El promedio del nota con situacion laboral solo estudiante es" + promedioSoloEstudiante);
	console.log("C- El promedio del nota con situacion laboral trabajando es " + promedioTrabajando);

  console.log("D- La edad y nombre del que cursa menos cantidad de materias y que este buscando trabajo es " + nombreMM + " con " + edadMM + " años");

}
