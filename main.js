// Simulador: Calculadora de presupuesto para la realización de un proyecto
 
let cantidadHoras = prompt("Para saber el costo de su programa primero deberá ingresar la cantidad de horas:");
let tipoLenguaje = prompt("Tipo de Lenguaje: -C/C++ ingrese C -C# ingrese # -Phyton ingrese P -Go ingrese G");
let urgente = prompt("Si su programa es requerido con URGENCIA ingrese 1, de lo contrario, ingrese 0");
let costoTotal;	
	
	switch(tipoLenguaje) {
	case "C": 
		costoTotal = cantidadHoras*7500; 
		break;
	case "#": 
		costoTotal = cantidadHoras*6100; 
		break;
	case "P": 
		costoTotal = cantidadHoras*5400; 
		break;
	case "G": 
		costoTotal = cantidadHoras*5000;
		break;
	}
	
	if (urgente == 1) {
		costoTotal= costoTotal+(costoTotal*0.2); 
	}
	
	alert ("El importe de su proyecto es de: $" +costoTotal); 