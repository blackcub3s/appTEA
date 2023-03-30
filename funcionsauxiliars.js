function posaEtiquetaDRETA(i, j, matriu) {
	//PRE: index i i j de la matriu per a un element matriu[i][j], i la matriu.
	//POST: retorna l'string amb la operació que podem fer per tal de que poguem fer que un 
	//		element A de la matriu doni igual a un element B que hi és contigu per la dreta.
	// 
	// L'operació que es fa és sempre una operació única (o bé +,-,* o /) tal que:
	// 			f(matriu[i][j]) --->  matriu[i][j+1])  
	//S'intentarà aplicar X abans que +, i / abans que -

	//passem a indexació des de zero.
  	// Check if matriu is defined and not null
	if (!matriu) {
		console.error('Error: matriu is undefined or null COLLONS!!!');
		return '';
	}

	i = i - 1;
	j = j - 1;
	var nEsq = matriu[i][j]; 
	var nDre = matriu[i][j+1];
	if (nEsq == nDre) {
		return "+0"
	}
	else if (nEsq < nDre) {
		//MIREM SI POT TROBAR UN FACTOR PER FER LA MULTIPLICACIÓ QUE PERMET PASSAR DE nEsq --> nDre
		// i mostrar la operació inversa que permet passar de nEsq --> nDre
		var factor = 9;
		while (factor > 1) {
			//es podria implementar una cerca dicotòmica (primer 9, si no va, 2, si no va 5.... aixi seria més eficient)
			if (nEsq * factor == nDre) {
				return `x${factor}` 
			}
			factor = factor - 1;
		}
		var resta = nDre - nEsq;
		return `+${resta}`;
	}
	else { 	// nEsq > nDre
		//MIREM SI POT TROBAR UN FACTOR PER FER LA MULTIPLICACIÓ QUE PERMET PASSAR DE nDre --> nEsq i mostrar la operació
		//inversa que permet passar de nEsq --> nDre
		var factor = 9;
		while (factor > 1) {
			//es podria implementar una cerca dicotòmica (primer 9, si no va, 2, si no va 5.... aixi seria més eficient)
			if (nDre * factor == nEsq) {
				return `/${factor}` 
			}
			factor = factor - 1;
		}		
		var suma = nEsq - nDre;
		return `-${suma}`;
	}
}

function posaEtiquetaAVALL(i, j, matriu) {
	//PRE: index i i j de la matriu per a un element matriu[i][j], i la matriu.
	//POST: retorna l'string amb la operació que podem fer per tal de que poguem fer que un 
	//		element A de la matriu doni igual a un element B que hi és contigu per la dreta.
	// 
	// L'operació que es fa és sempre una operació única (o bé +,-,* o /) tal que:
	// 			f(matriu[i][j]) --->  matriu[i+1][j])  
	//S'intentarà aplicar X abans que +, i / abans que -

	//passem a indexació des de zero.
  	// Check if matriu is defined and not null
	if (!matriu) {
		console.error('Error: matriu is undefined or null COLLONS!!!');
		return '';
	}

	i = i - 1;
	j = j - 1;
	var nEsq = matriu[i][j]; 
	var nDre = matriu[i+1][j];
	if (nEsq == nDre) {
		return "+0"
	}
	else if (nDre > nEsq) {
		//MIREM SI POT TROBAR UN FACTOR PER FER LA MULTIPLICACIÓ QUE PERMET PASSAR DE nEsq --> nDre
		// i mostrar la operació inversa que permet passar de nEsq --> nDre
		var factor = 9;
		while (factor > 1) {
			//es podria implementar una cerca dicotòmica (primer 9, si no va, 2, si no va 5.... aixi seria més eficient)
			if (nEsq * factor == nDre) {
				return `x${factor}` 
			}
			factor = factor - 1;
		}
		var resta = nDre - nEsq;
		return `+${resta}`;
	}
	else { 				//nDre < nEsq
		//MIREM SI POT TROBAR UN FACTOR PER FER LA MULTIPLICACIÓ QUE PERMET PASSAR DE nDre --> nEsq i mostrar la operació
		//inversa que permet passar de nEsq --> nDre
		var factor = 9;
		while (factor > 1) {
			//es podria implementar una cerca dicotòmica (primer 9, si no va, 2, si no va 5.... aixi seria més eficient)
			if (nDre * factor == nEsq) {
				return `/${factor}` 
			}
			factor = factor - 1;
		}		
		var suma = nEsq - nDre;
		return `-${suma}`;
	}
}

function comprova_i_pinta_TextArea() {
	// Get the textarea element
	var textarea = document.querySelector('#12 textarea');

	// Check if the content is correct
	var isContentCorrect = true;

	// Set the border color based on the content
	if (isContentCorrect) {
		textarea.style.borderColor = 'green';
	} else {
		textarea.style.borderColor = 'red';
	}
}


//AQUESTA FUNCIÓ HA ESTAT TRADUIDA DE LA FUNCIÓ QUE VAIG FER EN PYTHON FENT SERVIR XAT GPT
function posa_data_en_text(str_data) {
	/* PRE: "02/10/2021", 
	   POST: "10 d'Octubre de 2021." 
	*/
	const data = str_data.split("/");
	const dd = data[0], mm = data[1], aaaa = data[2];
	const dic_mesos = {
	  1: "de gener",
	  2: "de febrer",
	  3: "de març",
	  4: "d'abril",
	  5: "de maig",
	  6: "de juny",
	  7: "de juliol",
	  8: "d'agost",
	  9: "de setembre",
	  10: "d'octubre",
	  11: "de novembre",
	  12: "de desembre"
	};
	return parseInt(dd) + " " + dic_mesos[parseInt(mm)] + " de " + aaaa;
  }
  